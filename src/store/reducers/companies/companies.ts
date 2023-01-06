import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";

//addcompany action
export const addcompany = createAsyncThunk(
  actionTypes.ADD_COMPANY,
  async (params: any) => {
    //response of addcompany api
    const response = {
      addcompany: true,
    };
    //returned a response to reducer
    return response;
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
  async () => {
    //response of company

    const response = [
      {
        id: 1,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-1",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 2,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-2",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 3,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-3",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 4,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-4",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 5,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-5",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 6,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-6",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 7,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-7",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 8,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-8",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 9,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-9",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
      {
        id: 10,
        name: "Orangebits Software Technologies(India) Pvt. Ltd-10",
        PAN: "AYAPN7894N",
        TAN: "AYAPN7894N",
        GST: "AYAPN7894N",
        defaultLetterHead: "ORNG123",
        defaultCurrency: "Rupees",
        domain: "orange.com",
        abbr: "ORNG123",
        taxID: "TAX123",
        country: "india",
        dateofEstiblishment: "2 October, 2023",
      },
    ];
    //returned a response to reducer
    return response;
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
      state.companies = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(companylist.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.companies = undefined;
    });
  },
});

export default Companies.reducer;
