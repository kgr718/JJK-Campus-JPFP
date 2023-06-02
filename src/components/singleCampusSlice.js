import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

// async thunk, fetches single campus object from API based on ID.
export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},

  // handles fulfilled action - sets state to the fetched campus object
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// selector function - returns single candy object from Redux store
export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;