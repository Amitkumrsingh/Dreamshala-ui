import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { email, token, username } = action.payload;
      state.user = { email, token, username };
      state.isLoggedIn = true;
    },
    signOutUser: (state, action) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUserData, signOutUser } = userSlice.actions;
export default userSlice.reducer;
