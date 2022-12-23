import { configureStore } from "@reduxjs/toolkit";

//import all the reducers
import authentication from "./reducers/users/authentication";
import addCompanies from "./reducers/users/addCompanies";

//store configuration
export const store = configureStore({
  reducer: {
    //storename and redicers name
    authentication: authentication,
    addCompanies:addCompanies
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
