import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";

//addcompany action
export const addcompany = createAsyncThunk(actionTypes.ADD_COMPANY, async () => {
  //response of addcompany api
  const response = {
    addcompany: true,
  };
  //returned a response to reducer
  return response;
});

// inteface for redux state
export interface StateI {
  company?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  company: undefined, //company with details
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
      state.company = action.payload.data;
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
