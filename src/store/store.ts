import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../apis/userApi";

// Create the store with correct reducer shape
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
