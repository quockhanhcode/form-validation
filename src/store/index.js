import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./StudentReducer";

export default configureStore({
  reducer: {
    student: StudentReducer,
  },
});
