import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "Md. Polash Miya",
    email: "polashmiya2015@gmail.com",
    isLogin: false
  },
  reducers: {
    login: (state) => {
      state.isLogin = !state.isLogin;
    }
  }
});
export const { login } = UserSlice.actions;
export default UserSlice.reducer;
