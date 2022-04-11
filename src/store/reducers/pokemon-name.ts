import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pokemonName = createSlice({
  name: "pokemon_name",
  initialState: {
    name: "",
  },
  reducers: {
    handleOnChange: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { handleOnChange } = pokemonName.actions;
