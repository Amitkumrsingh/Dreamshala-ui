import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {},
  err: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorData: (state, action) => {
      const { fields, err } = action.payload;
      state.fields = fields;
      state.err = err;
      console.log(state);
    },
  },
});

export const { setErrorData } = errorSlice.actions;
export default errorSlice.reducer;
