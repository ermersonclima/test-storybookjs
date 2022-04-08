import { jsonPlaceholderApi } from "../apis/json-placeholder.api";
import { pokemonApi } from "../apis/pokemon.api";

const apiReducers = {
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export default apiReducers;
