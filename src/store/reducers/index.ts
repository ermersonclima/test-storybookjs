import { jsonPlaceholderApi } from "../apis/jsonplaceholder.api";
import { pokemonApi } from "../apis/pokemon.api";

const reducers = {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
}

export default reducers