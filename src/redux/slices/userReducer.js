import { createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../config";
import userServices from "../../services/userServices";

let user;
if (userServices.isLogedIn()) {
  user = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};
}

const initialState = {
  user: user,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { email, token, username } = action.payload;
      state.user = { email, token, username };

      localStorage.setItem("reduxState", JSON.stringify({ ...state.user }));
    },
    signOutUser: (state, action) => {
      localStorage.clear();
      state.user = {};
    },
  },
});

export const { setUserData, signOutUser } = userSlice.actions;
export default userSlice.reducer;
