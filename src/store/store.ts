import { configureStore } from "@reduxjs/toolkit";
import apiReducers from "./reducers";

const store = configureStore({
  reducer: apiReducers,
});

export default store;
