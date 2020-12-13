import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import tasksReducer from "./tasks";
import paramReducer from "./param";

const configureAppStore = () =>
  configureStore({
    reducer: combineReducers({
      tasks: tasksReducer,
      param: paramReducer,
    }),
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

export default configureAppStore;
