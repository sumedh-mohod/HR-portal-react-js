import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionTypes } from "../../actionTypes";
import { axiosClient } from "../../axiosClient";
import { RestfulUrls } from "../../restfulUrls";

//add project action
export const addProject = createAsyncThunk(
  actionTypes.ADD_PROJECT,
  async (params: any) => {
    //response of addproject api
    const response = {
      addProject: true,
    };
    //returned a response to reducer
    return response;
  }
);

// update project action
export const updateProject = createAsyncThunk(
  actionTypes.UPDATE_PROJECT,
  async (params: any) => {
    //response of update project api
    const response = {
      updateProject: true,
    };
    //returned a response to reducer
    return response;
  }
);

// get projects action
export const getProjects = createAsyncThunk(
  actionTypes.GET_PROJECTS,
  async (_, { rejectWithValue }) => {
    //response of getprojects
    const response = [
      {
        id: 1,
        project_name: "hrms",
        Start_date: "Octomber 2, 2023",
        End_date: "Octomber 20, 2023",
        Team_size: 25,
      },
      {
        id: 2,
        project_name: "Project Name 2",
        Start_date: "Octomber 2, 2023",
        End_date: "Octomber 20, 2023",
        Team_size: 25,
      },
      {
        id: 3,
        project_name: "Project Name 3",
        Start_date: "Octomber 2, 2023",
        End_date: "Octomber 20, 2023",
        Team_size: 25,
      },
      {
        id: 4,
        project_name: "Project Name 4",
        Start_date: "Octomber 2, 2023",
        End_date: "Octomber 20, 2023",
        Team_size: 25,
      },
      {
        id: 5,
        project_name: "Project Name 5",
        Start_date: "Octomber 2, 2023",
        End_date: "Octomber 20, 2023",
        Team_size: 25,
      },
    ];
    //returned a response to reducer
    return response;
  }
);
// get project action
export const getProject = createAsyncThunk(
  actionTypes.GET_PROJECT,
  async (_, { rejectWithValue }) => {
    //response of get project api
    const response = {
      getProject: true,
    };
    //returned a response to reducer
    return response;
  }
);
// inteface for redux state
export interface StateI {
  projects?: any; // company with details
  error: any; // any api error
  isLoadingRequest: boolean; //loading flag
}

//redux state
const initialState: StateI = {
  projects: undefined, //company with details
  error: "", // any api error
  isLoadingRequest: false, //loading flag
};

//slice or reducer
const Projects = createSlice({
  name: "projects",
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
    builder.addCase(addProject.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(addProject.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.projects = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(addProject.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================update Project========================
    builder.addCase(updateProject.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
    });
    // reducer when api call is fulfilled
    builder.addCase(updateProject.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.isLoadingRequest = false;
      state.projects = action.payload;
    });
    // reducer when api call is rejected
    builder.addCase(updateProject.rejected, (state: StateI) => {
      //state updated in rejected state
      state.isLoadingRequest = false;
    });
    // ======================ggetProjects========================
    builder.addCase(getProjects.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.projects = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getProjects.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.projects = action.payload;
      console.log("action payload project", action.paylaod);
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getProjects.rejected, (state: StateI) => {
      console.log("get projecgt REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.projects = undefined;
    });
    // ======================get project========================
    builder.addCase(getProject.pending, (state: StateI) => {
      //state updated in pending state
      state.isLoadingRequest = true;
      state.projects = undefined;
    });
    // reducer when api call is fulfilled
    builder.addCase(getProject.fulfilled, (state: StateI, action: any) => {
      //state updated in fulfilled state
      state.projects = action.payload;
      state.isLoadingRequest = false;
    });
    // reducer when api call is rejected
    builder.addCase(getProject.rejected, (state: StateI) => {
      console.log("get projeect REJECTED");
      //state updated in rejected state
      state.isLoadingRequest = false;
      state.projects = undefined;
    });
  },
});

export default Projects.reducer;
