import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "store/actionTypes";
import { axiosClient } from "store/axiosClient";
import { RestfulUrls } from "store/restfulUrls";

//add employee action
export const addEmployee = createAsyncThunk(
  actionTypes.ADD_EMPLOYEE,
  async (params: any, { rejectWithValue }) => {
    //response of addproject api
    try {
      const response = await axiosClient.post(RestfulUrls.Add_Employee, params);
      console.log("response of add employee", params);
      console.log("response of add employee", response);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

// update employee action
export const updateEmployee = createAsyncThunk(
  actionTypes.UPDATE_EMPLOYEE,
  async (params: any, { rejectWithValue }) => {
    //response of update employee api
    try {
      const response = await axiosClient.put(`${RestfulUrls.Get_Employees}/${params.id}`,params);
      console.log("response of update employee", response);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
    //returned a response to reducer
    // return response;
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
    // try {
    //   const response = await axiosClient.get(RestfulUrls.Get_Employees);
    //   console.log("response of get employees", response);
    //   return response.data;
    // } catch (error) {
    //   return rejectWithValue("Something went wrong");
    // }
    //returned a response to reducer
    return response;
  }
);
// get project action
export const getEmployee = createAsyncThunk(
  actionTypes.GET_EMPLOYEE,
  async (params, { rejectWithValue }) => {
    //response of get project api
    try {
      const response = await axiosClient.get(`${RestfulUrls.Get_Employees}/${params}`
      );
      console.log("response of get employe", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
    //returned a response to reducer 
  }
);
export const deleteEmployee = createAsyncThunk(
  actionTypes.DELETE_EMPLOYEE,
  async (params:any, { rejectWithValue }) => {
    //response of delete company api
    try {
      const response = await axiosClient.delete(`${RestfulUrls.Get_Employees}/${params.id}`);
      console.log("response of delet employee", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  });
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
