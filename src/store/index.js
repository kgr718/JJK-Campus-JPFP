/* Here is where you will configure the store 
  The store needs some reducer slices!
*/ 

import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "../campusSlice";
import studentSlice from "../components/studentSlice";
import singleCampusSlice from "../components/singleCampusSlice";
import singleStudentSlice from "../components/singleStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    students: studentSlice,
    singleCampus: singleCampusSlice,
    singleStudent: singleStudentSlice,
  },
});

export default store;