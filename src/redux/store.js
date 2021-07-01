import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import userReducer from "./UserSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
});
