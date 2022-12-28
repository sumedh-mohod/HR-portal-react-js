import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";

//addcompany action
export const addcompany = createAsyncThunk(actionTypes.ADD_COMPANY, async (params:any) => {
  //response of addcompany api
  const response = {
    addcompany:{
      company:params.company,
      defaultLetterHead: params.defaultLetterHead,
      abbr: params.abbr,
      taxID:params.taxID,
      defaultCurrency:params.defaultCurrency,
      domain:params.domain,
      country:params.domain,
      dateOfEstablishment:params.dateOfEstablishment,
      address:params.address,
    }
  };
  //returned a response to reducer
  return response;
});

// inteface for redux state
export interface StateI {
  addcompany?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  addcompany: undefined, //company with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const addCompany = createSlice({
  name: "addcompany",
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
      state.addcompany = action.payload.data;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addcompany.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
  },
});

export default addCompany.reducer;
