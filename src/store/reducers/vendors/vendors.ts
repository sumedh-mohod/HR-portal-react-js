import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";
import { axiosClient } from "../../axiosClient";
import { RestfulUrls } from "../../restfulUrls";

//add vendor action
export const addVendor = createAsyncThunk(
  actionTypes.ADD_PROJECT,
  async (params: any) => {
    //response of addvendor api
    const response = {
      addVendor: true,
    };
    //returned a response to reducer
    return response;
  }
);

// update vendor action
export const updateVendor = createAsyncThunk(
  actionTypes.UPDATE_VENDOR,
  async (params: any) => {
    //response of update project api
    const response = {
      updateVendor: true,
    };
    //returned a response to reducer
    return response;
  }
);

//vendors action
export const getVendors = createAsyncThunk(
  actionTypes.GET_VENDORS,
  async () => {
    //response of vendors api
    const response = [
      {
        id: 1,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 2,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 3,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 4,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 5,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 6,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 7,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 8,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 9,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 10,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 11,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 12,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 13,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
      {
        id: 14,
        vendor_name: "Vendor 1",
        Address_Line_1: 3,
        Address_Line_2: 200,
        city: "Nagpur",
        state: "India",
        country: "India",
        Postal_Code: "India",
        Vendor_Onboard_Date: "India",
        description:
          "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
      },
    ];
    //returned a response to reducer
    return response;
  }
);

// update vendor action
export const getVendor = createAsyncThunk(
  actionTypes.GET_VENDOR,
  async (params: any) => {
    //response of update project api
    const response = {
      getVendor: true,
    };
    //returned a response to reducer
    return response;
  }
);
// inteface for redux state
export interface StateI {
  vendors?: any; // vendors with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  vendors: undefined, //vendor with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Vendors = createSlice({
  name: "vendors",
  initialState,
  //normal reducers
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
  },
  //async reducers
  extraReducers: (builder) => {
      // ======================add Vendor ========================
    // reducer when api call is in progress
    builder.addCase(addVendor.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addVendor.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.vendors = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addVendor.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================update Project========================
    builder.addCase(updateVendor.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(updateVendor.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.vendors = action.payload;
    });
    // reducer when api call is rejected
    builder.addCase(updateVendor.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================ggetProjects========================
    builder.addCase(getVendors.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.vendors = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getVendors.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.vendors = action.payload;
      console.log("action payload project", action.paylaod);
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getVendors.rejected, (state: StateI) => {
      console.log("get projecgt REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.vendors = undefined;
    });
    // ======================get project========================
    builder.addCase(getVendor.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.vendors = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getVendor.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.vendors = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getVendor.rejected, (state: StateI) => {
      console.log("get projeect REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.vendors = undefined;
    });
  },
});

export default Vendors.reducer;
