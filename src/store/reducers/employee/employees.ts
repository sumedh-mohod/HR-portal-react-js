import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";
import { axiosClient } from "../../axiosClient";
import { RestfulUrls } from "../../restfulUrls";

//add employee action
export const addEmployee = createAsyncThunk(
  actionTypes.ADD_EMPLOYEE,
  async (params: any) => {
    //response of addproject api
    const response = {
      addEmployee: true,
    };
    //returned a response to reducer
    return response;
  }
);

// update employee action
export const updateEmployee = createAsyncThunk(
  actionTypes.UPDATE_EMPLOYEE,
  async (params: any) => {
    //response of update employee api
    const response = {
      updateEmployee: true,
    };
    //returned a response to reducer
    return response;
  }
);

// get Employees action
export const getEmployees = createAsyncThunk(
  actionTypes.GET_EMPLOYEES,
  async (_, { rejectWithValue }) => {
    //response of getEmployees
    const response = [
      {
        id: 1,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 2,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 3,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 4,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 5,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 6,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 7,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 8,
        employee_name: "kajal Nimje",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 9,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
      {
        id: 10,
        employee_name: "Nikhil Thaware",
        EmployeeId: "ORNG123456",
        Designation: "Senior Consultant",
        Technology: "IOS Developer, Swift",
      },
    ];
    //returned a response to reducer
    return response;
  }
);
// get project action
export const getEmployee = createAsyncThunk(
  actionTypes.GET_EMPLOYEE,
  async (_, { rejectWithValue }) => {
    //response of get project api
    const response = {
      getEmployee: true,
    };
    //returned a response to reducer
    return response;
  }
);
// inteface for redux state
export interface StateI {
  employees?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  employees: undefined, //company with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Employees = createSlice({
  name: "employees",
  initialState,
  //normal reducers
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
  },
  //async reducers
  extraReducers: (builder) => {
    // ======================add add Project========================
    // reducer when api call is in progress
    builder.addCase(addEmployee.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addEmployee.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.employees = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addEmployee.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================update Project========================
    builder.addCase(updateEmployee.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(updateEmployee.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.employees = action.payload;
    });
    // reducer when api call is rejected
    builder.addCase(updateEmployee.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================ggetEmployees========================
    builder.addCase(getEmployees.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.employees = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getEmployees.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.employees = action.payload;
      console.log("action payload employee", action.paylaod);
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getEmployees.rejected, (state: StateI) => {
      console.log("get projecgt REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.employees = undefined;
    });
    // ======================get employee========================
    builder.addCase(getEmployee.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.employees = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getEmployee.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.employees = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getEmployee.rejected, (state: StateI) => {
      console.log("get projeect REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.employees = undefined;
    });
  },
});

export default Employees.reducer;
