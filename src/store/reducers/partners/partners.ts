import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";
import { axiosClient } from "../../axiosClient";
import { RestfulUrls } from "../../restfulUrls";

//add partner action
export const addPartner = createAsyncThunk(
  actionTypes.ADD_PARTNER,
  async (params: any) => {
    //response of addpartner api
    const response = {
      addPartner: true,
    };
    //returned a response to reducer
    return response;
  }
);
// update partrner action
export const updatePartner = createAsyncThunk(
  actionTypes.UPDATE_PARTNER,
  async (params: any) => {
    //response of update partner api
    const response = {
      updatePartner: true,
    };
    //returned a response to reducer
    return response;
  }
);
// get patners action
export const getPartners = createAsyncThunk(
  actionTypes.GET_PARTNERS,
  async () => {
    //response of patners api
    const response = [
      { id: 1,
        company_name: "Google",
        project_count: 3,
        employee_count: 200,
        defaultCurrency: "Rupees",
        country: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      { id: 2,
        company_name: "Microsoft",
        project_count: 4,
        employee_count: 220,
        defaultCurrency: "Riyal",
        country: "Saudi Arab",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      { id: 3,
        company_name: "Tesla",
        project_count: 2,
        employee_count: 150,
        defaultCurrency: "Dollar",
        country: "UK",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {id: 4,
        company_name: "Twitter",
        project_count: 1,
        employee_count: 870,
        defaultCurrency: "Rupees",
        country: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      { id: 5,
        company_name: "Orangebits",
        project_count: 3,
        employee_count: 250,
        defaultCurrency: "Rupees",
        country: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {id: 6,
        company_name: "E-Zest",
        project_count: 4,
        employee_count: 100,
        defaultCurrency: "Rupees",
        country: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
     
    ];
    //returned a response to reducer
    return response;
  }
);
// get partner action
export const getPartner = createAsyncThunk(
  actionTypes.GET_PARTNER,
  async (_, { rejectWithValue }) => {
    //response of get company api
    const response = {
      getPartner: true,
    };
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
    // ======================add partner========================
    // reducer when api call is in progress
    builder.addCase(addPartner.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addPartner.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.partners = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addPartner.rejected, (state: StateI) => {
      console.log("addPartner rejected");
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================update partner========================
    builder.addCase(updatePartner.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(updatePartner.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.partners = action.payload;
    });
    // reducer when api call is rejected
    builder.addCase(updatePartner.rejected, (state: StateI) => {
      console.log("updatePartrner rejected");
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================get partners========================
    builder.addCase(getPartners.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.partners = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getPartners.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.partners = action.payload;
      console.log("action.paylod",action.payload)
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getPartners.rejected, (state: StateI) => {
      console.log("getPartners rejected ");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.partners = undefined;
    });
    // ======================get partner========================
    builder.addCase(getPartner.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.partners = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getPartner.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.partners = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getPartner.rejected, (state: StateI) => {
      console.log("getPartner rejected");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.partners = undefined;
    });
  },
});


export default Partners.reducer;
