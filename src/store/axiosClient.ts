import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    if (localStorage) {
      const token = localStorage.getItem("access_token");

      if (token != null && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
        // config.headers.Authorization =
      }
    }
    return config;
  } catch (_error) {
    return config;
  }
};

// Axios client
class AxiosClient {
  // axios instance
  private instance: AxiosInstance | null = null;

  //updating axios instance
  private get axiosInstance(): AxiosInstance {
    return this.instance != null ? this.instance : this.initAxiosInstance();
  }

  // initial function for axios client
  initAxiosInstance() {
    // creating axios instance
    const axiosRequest = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL,
      headers,
      withCredentials: false,
    });

    //updating a axios request before sending
    axiosRequest.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    //updating a axios response before sending
    axiosRequest.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = axiosRequest;
    return axiosRequest;
  }

  //axios request
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.request(config);
  }

  // axios get request
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.get<T, R>(url, config);
  }

  // axios post request
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.post<T, R>(url, data, config);
  }

  // axios put request
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.put<T, R>(url, data, config);
  }

  // axios delete request
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.delete<T, R>(url, config);
  }

  // We can handle generic app errors depending on the status code
  private handleError(error: AxiosError & { status?: number }) {
    const status = error?.status;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        localStorage.clear();
        window.location.href = "/login";
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const axiosClient = new AxiosClient();
