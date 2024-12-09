import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import userState from "./initialState";

const authSlice = createSlice({
  name: "auth_store",
  initialState: userState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    },
    clearUser: (state) => {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
