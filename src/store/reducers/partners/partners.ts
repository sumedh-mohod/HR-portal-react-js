import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";

//patners action
export const getPartners = createAsyncThunk(
  actionTypes.PARTNERS,
  async () => {
    //response of patners api
    const response = [
      {
        company_name: "Google",
        project_count: 3,
        employee_count: 200,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Microsoft",
        project_count: 4,
        employee_count: 220,
        defaultCurrency: "Riyal",
        country: "Saudi Arab",
      },
      {
        company_name: "Tesla",
        project_count: 2,
        employee_count: 150,
        defaultCurrency: "Dollar",
        country: "UK",
      },
      {
        company_name: "Twitter",
        project_count: 1,
        employee_count: 870,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Orangebits",
        project_count: 3,
        employee_count: 250,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "E-Zest",
        project_count: 4,
        employee_count: 100,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "TCS",
        project_count: 2,
        employee_count: 900,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Infosys",
        project_count: 3,
        employee_count: 400,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Wipro",
        project_count: 5,
        employee_count: 100,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Accenture",
        project_count: 3,
        employee_count: 500,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Winjit",
        project_count: 5,
        employee_count: 250,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "Persistent",
        project_count: 3,
        employee_count: 200,
        defaultCurrency: "Rupees",
        country: "India",
      },
      {
        company_name: "BMC",
        project_count: 4,
        employee_count: 100,
        defaultCurrency: "Rupees",
        country: "India",
      },
    ];
    //returned a response to reducer
    return response;
  }
);

// inteface for redux state
export interface StateI {
  partners?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  partners: undefined, //company with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Partners = createSlice({
  name: "Partners",
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
    builder.addCase(getPartners.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(getPartners.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.partners = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getPartners.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
  },
});

export default Partners.reducer;
