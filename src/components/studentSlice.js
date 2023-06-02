import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAllStudents = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get("/api/students", {
      params: {
        include: "campus",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//AJAX request that causes new student to be persist in db
export const addStudentsAsync = createAsyncThunk(
  "addStudent",
  async ({ firstName, lastName, email, campus, campusId }) => {
    const { data } = await axios.post("/api/students", {
      firstName,
      lastName,
      email,
      campus,
      campusId,
    });
    return data;
  }
);

// //AJAX request that deletes student in db
export const deleteStudentsAsync = createAsyncThunk(
  "deleteStudent",
  async (id) => {
    const { data } = await axios.delete(`/api/students/${id}`);
    return data;
  }
);

//AJAX request that edits students in db
export const editStudentAsync = createAsyncThunk(
  "editStudent",
  async ({ id, firstName, lastName, email, campus, campusId }) => {
    const { data } = await axios.put(`/api/students/${id}`, {
      id,
      firstName,
      lastName,
      email,
      campus,
      campusId,
    });
    return data;
  }
);

//AJAX request that unregister students in db when set to falsey
export const unregisterStudentAsync = createAsyncThunk(
  "unregisterStudent",
  async ({ id, campusId }) => {
    const { data } = await axios.put(`/api/students/${id}`, {
      id,
      campusId: campusId || null,
    });
    return data;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(unregisterStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteStudentsAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (students) => students.id !== action.payload.id
      );
      return newState;
    });
    builder.addCase(addStudentsAsync.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};
export default studentSlice.reducer;