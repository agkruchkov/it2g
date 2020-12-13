import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "param",
  initialState: {
    filter: "All",
  },
  reducers: {
    filtered: (state, action) => action.payload,
  },
});

export const getParam = (state) => state.param;

export const { filtered } = slice.actions;

export default slice.reducer;
