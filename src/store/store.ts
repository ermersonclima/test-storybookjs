import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import apiReducers from "./reducers";
import { pokemonName } from "./reducers/pokemon-name";

const reducers = combineReducers({ ...apiReducers, ...pokemonName.reducer });

const store = configureStore({
  reducer: reducers,
});

export default store;
