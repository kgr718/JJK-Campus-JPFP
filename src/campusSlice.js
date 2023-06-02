import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAllCampuses = createAsyncThunk("allCampuses", async () => {
  try {
    const { data } = await axios.get("/api/campuses");
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const addCampusesAsync = createAsyncThunk(
  "addCampus",
  async ({ name, address, description }) => {
    const { data } = await axios.post("/api/campuses", {
      name,
      address,
      description,
    });
    return data;
  }
);


export const deleteCampusesAsync = createAsyncThunk(
  "deleteCampus",
  async (id) => {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
  }
);


export const editCampusAsync = createAsyncThunk(
  "editCampus",
  async ({ id, name, address, description }) => {
    const { data } = await axios.put(`/api/campuses/${id}`, {
      id,
      name,
      address,
      description,
    });
    return data;
  }
);

const campusSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCampusesAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (campuses) => campuses.id !== action.payload.id
      );
      return newState;
    });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCampusesAsync.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
    builder.addCase(fetchAllCampuses.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};
export default campusSlice.reducer;