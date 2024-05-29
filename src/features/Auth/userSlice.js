import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  const response = await userApi.regiser(payload);

  localStorage.setItem("access_token", response.jwt);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      // Clear local storage
      localStorage.removeItem("user");
      // Clear state
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload;
    });
  },
});
const { reducer } = userSlice;
export const { logout } = userSlice.actions;
export default reducer;
