import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

export const AddNewCollegeStepSlice = createSlice({
  name: "addNewCollegeStep",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep += 1;
    },
    preStep: (state) => {
      state.activeStep -= 1;
    },
    toStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { nextStep, preStep, toStep } = AddNewCollegeStepSlice.actions;
export default AddNewCollegeStepSlice.reducer;
