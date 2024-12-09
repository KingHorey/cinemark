import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";

import authSliceReducer from "@/lib/createSlice";

const reducers = combineReducers({
  auth: authSliceReducer,
});

export const makestore = () => {
  return configureStore({
    reducer: reducers,
  });
};

export type Store = ReturnType<typeof makestore>;
