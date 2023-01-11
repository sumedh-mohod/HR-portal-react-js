import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";

//vendors action
export const getVendors = createAsyncThunk(
  actionTypes.VENDOR_LIST,
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
  name: "Vendors",
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
    builder.addCase(getVendors.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(getVendors.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.vendors = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getVendors.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
  },
});

export default Vendors.reducer;
