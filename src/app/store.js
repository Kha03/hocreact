import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
export const rootReducer = configureStore({
  reducer: {
    user: userReducer,
  },
});
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
