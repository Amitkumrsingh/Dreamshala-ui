import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counter";
import rootReducer from "./slices/index";

export const store = configureStore({
  reducer: rootReducer,

  // reducer: {
  //   counter: counterReducer,
  // },
});
