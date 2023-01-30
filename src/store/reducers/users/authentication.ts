import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "store/actionTypes";

//login action
export const login = createAsyncThunk(
  actionTypes.ON_LOGIN,
  async (params: any) => {
    //response of login api
    const response = {
      token: "127883uwuu8888273uwu",
      user: {
        email: params.email,
        first_name: "Orangebits",
        last_name: "Tech",
        mobile_number: "8898785764",
        isAuthenticated: true,
      },
    };
    //returned a response to reducer
    return response;
  }
);

// inteface for redux state
export interface StateI {
  user?: any; // logged in users details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  user: undefined, //logged in users details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Authentication = createSlice({
  name: "authentication",
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
    builder.addCase(login.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(login.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.user = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(login.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
  },
});

export default Authentication.reducer;
