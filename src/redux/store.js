import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import { entriesApi } from "./features/entriesAPI";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    [entriesApi.reducerPath]: entriesApi.reducer,
    // we can add more reducers here in the future
    // pasteView: pasteViewReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(entriesApi.middleware),
});
