import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "store/actionTypes";
import { axiosClient } from "store/axiosClient";
import { RestfulUrls } from "store/restfulUrls";

//add company action
export const addCompany = createAsyncThunk(
  actionTypes.ADD_COMPANY,
  async (params: any, { rejectWithValue }) => {
    //response of addcompany api
    try {
      const response = await axiosClient.post(RestfulUrls.Add_Company, params);
      console.log("response of add company", params);
      console.log("response of add company", response);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
    //returned a response to reducer    
  }
);

// update company action
export const updateCompany = createAsyncThunk(
  actionTypes.UPDATE_COMPANY,
  async (params: any, { rejectWithValue }) => {
    //response of update company api
    try {
      const response = await axiosClient.put(
        `${RestfulUrls.Get_Companies}/${params.id}`,
        params
      );
      console.log("response of update company", response);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
    //returned a response to reducer
    // return response;
  }
);

// get companies action
export const getCompanies = createAsyncThunk(
  actionTypes.GET_COMPANIES,
  async (_, { rejectWithValue }) => {
    //response of getcompany
    try {
      const response = await axiosClient.get(RestfulUrls.Get_Companies);
      console.log("response of get companies", response);
      return response.data;
    } 
    catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);
// get company action
export const getCompany = createAsyncThunk(
  actionTypes.GET_COMPANY,
  async (params: any, { rejectWithValue }) => {
    // response of get company api
    try {
      const response = await axiosClient.get(
        `${RestfulUrls.Get_Companies}/${params.id}`
      );
      console.log("response of get company", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
    //returned a response to reducer
  }
);
// delete company action
export const deleteCompany = createAsyncThunk(
  actionTypes.DELETE_COMPANY,
  async (params: any, { rejectWithValue }) => {
    //response of delete company api
    try {
      const response = await axiosClient.delete(
        `${RestfulUrls.Get_Companies}/${params.id}`
      );
      console.log("response of delet company", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

// inteface for redux state
export interface StateI {
  companies?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  companies: undefined, //company with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Companies = createSlice({
  name: "Companies",
  initialState,
  //normal reducers
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
  },
  //async reducers
  extraReducers: (builder) => {
    // ======================add company========================
    // reducer when api call is in progress
    builder.addCase(addCompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addCompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addCompany.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });

    // ======================update company========================
    builder.addCase(updateCompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(updateCompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.companies = action.payload.data;
    });
    // reducer when api call is rejected
    builder.addCase(updateCompany.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });

    // ======================get companies========================
    builder.addCase(getCompanies.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.companies = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getCompanies.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload.data;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getCompanies.rejected, (state: StateI) => {
      console.log("companylist REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.companies = {
        content: [
          {
            abbreviation: "Elect",
            created: "2023-01-20T06:07:43.000+00:00",
            dateOfIncorporation: "1999-02-11T18:30:00.000+00:00",
            defaultCurrency: null,
            deleted: null,
            domain: null,
            id: 1,
            modified: null,
            companyAddresses: [],
            name: "HP",
          },
        ],
      };
    });

    // ======================delet company========================
    builder.addCase(deleteCompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.companies = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(deleteCompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(deleteCompany.rejected, (state: StateI) => {
      console.log("delete Company REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.companies = undefined;
    });

    // ======================get company========================
    builder.addCase(getCompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.companies = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getCompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload.data;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getCompany.rejected, (state: StateI) => {
      console.log("companylist REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.companies = undefined;
    });
  },
});

export default Companies.reducer;
