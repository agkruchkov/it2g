import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `https://5fd381c6e9cda40016f5b554.mockapi.io/api/tasks`;

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    loaded: (state, action) => action.payload,
    added: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    deleted: (state, action) => ({
      ...state,
      items: [...state.items].filter((item) => item.id !== action.payload),
    }),
    updated: (state, action) => ({
      ...state,
      items: [...state.items].map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      ),
    }),
  },
});

export const getTasks = (state) => state.tasks;

export const requestTasks = async (dispatch, state) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch(
      loaded({
        items: response.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (task) => async (dispatch, state) => {
  try {
    const response = await axios.post(BASE_URL, {
      title: task.title,
      description: task.description,
    });
    dispatch(added(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch, state) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    dispatch(deleted(response.data.id));
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, completed) => async (dispatch, state) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, { completed });
    dispatch(updated(response.data.id));
  } catch (error) {
    console.log(error);
  }
};

export const { loaded, added, deleted, updated } = slice.actions;

export default slice.reducer;
