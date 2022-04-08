import { createSlice } from "@reduxjs/toolkit";

export const pokemonName = createSlice({
  name: "pokemon_name",
  initialState: {
    name: "",
  },
  reducers: {
    handleOnChange: (state) => {
      state.name = "ditto";
    },
  },
});

export const { handleOnChange } = pokemonName.actions;
