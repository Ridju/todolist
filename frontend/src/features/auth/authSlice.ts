import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tokenToString } from "typescript";

export interface authState {
  token: string;
}

export interface authPayload {
  token: string;
}

const initialState: authState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: authState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteCredentials: (state: authState) => {
      state.token = "";
    },
  },
});

export const { setCredentials, deleteCredentials } = authSlice.actions;
export default authSlice.reducer;
