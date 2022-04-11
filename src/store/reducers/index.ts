import { jsonPlaceholderApi } from "../apis/json-placeholder.api";
import { pokemonApi } from "../apis/pokemon.api";
import { pokemonName } from "../reducers/pokemon-name";

const reducers = {
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [pokemonName.name]: pokemonName.reducer
};

export default reducers;
