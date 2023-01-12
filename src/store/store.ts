import { configureStore } from "@reduxjs/toolkit";

//import all the reducers
import authentication from "./reducers/users/authentication";
import companies from "./reducers/companies/companies";
import partners from "./reducers/partners/partners";
import projects from "./reducers/projects/projects";
import getVendors from "./reducers/vendors/vendors";

//store configuration
export const store = configureStore({
  reducer: {
    //storename and redicers name
    authentication: authentication,
    companies: companies,
    partners: partners,
    projects: projects,
    getVendors: getVendors,
  },
  //enable dev tools for development env
  devTools: process.env.NODE_ENV !== "production",
  //middleware for async api calls
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//export stores state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
