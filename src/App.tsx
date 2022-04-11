import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import BoxField from "./components/box-field";
import SearchBar from "./components/search-bar";
import ResultField from "./components/result-field";
import { useGetPokemonByNameQuery } from "./store/apis/pokemon.api";
import { handleOnChange } from "./store/reducers/pokemon-name";


interface PokeInfoProps {
  name?: string;
  imagePath?: string;
}

const App = (): ReactElement => {
  const { name } = useSelector((state: any) => state.pokemon_name);
  const [pokeInfo, setPokeInfo] = useState<PokeInfoProps | null>(null);

  const { data } = useGetPokemonByNameQuery(name);

  const searchPokemon = () => {
    setPokeInfo({
      name: data.name,
      imagePath: data.sprites.front_default,
    });
  };

  return (
    <>
      <BoxField title="Find pokemon info by name">
        <>
          <SearchBar
            value="Search"
            action={searchPokemon}
            change={handleOnChange}
          />
          {pokeInfo ? (
            <ResultField>
              <figure>
                <img src={pokeInfo.imagePath} alt={`${pokeInfo.name} sprite`} />
                <figcaption>{`${pokeInfo.name} front image sprite`}</figcaption>
              </figure>
            </ResultField>
          ) : null}
        </>
      </BoxField>
    </>
  );
};

export default App;
