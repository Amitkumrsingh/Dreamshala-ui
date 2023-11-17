import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import counterReducer from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
=======
// import counterReducer from "./slices/counter";
import AddNewCollegeStepReducer from "./slices/add-new-college-step-form";

export const store = configureStore({
  reducer: AddNewCollegeStepReducer,

  // reducer: {
  //   counter: counterReducer,
  // },
>>>>>>> b201923b6a0c347cbe273b82877dfdedffca4ba2
});
