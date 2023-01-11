import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";
import { axiosClient } from "../../axiosClient";
import { RestfulUrls } from "../../restfulUrls";

//addcompany action
export const addcompany = createAsyncThunk(
  actionTypes.ADD_COMPANY,
  async (params: any) => {
    //response of addcompany api
    try {
      const response = await axiosClient.post(RestfulUrls.Add_Company, {
        params,
      });
      return response;
    } catch (error) {
      console.log("error", error);
    }
    //returned a response to reducer
  }
);

// edit company action

export const editcompany = createAsyncThunk(
  actionTypes.EDIT_COMPANY,
  async (params: any) => {
    //response of addcompany api
    const response = {
      editcompany: true,
    };
    //returned a response to reducer
    return response;
  }
);

export const companylist = createAsyncThunk(
  actionTypes.COMPANY_LIST,
  async (_, { rejectWithValue }) => {
    //response of company
    try {
      const response = await axiosClient.get(RestfulUrls.Get_Companies);
      console.log("response", response);
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
    // reducer when api call is in progress
    builder.addCase(addcompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addcompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addcompany.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // edit start
    builder.addCase(editcompany.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(editcompany.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.companies = action.payload;
    });
    // reducer when api call is rejected
    builder.addCase(editcompany.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    builder.addCase(companylist.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.companies = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(companylist.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.companies = action.payload.data;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(companylist.rejected, (state: StateI) => {
      console.log("companylist REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.companies = undefined;
    });
  },
});

export default Companies.reducer;
