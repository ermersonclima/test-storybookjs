import { ReactElement, useState } from "react";
import BoxField from "./components/box-field";
import SearchBar from "./components/search-bar";
import ResultField from "./components/result-field";
import { useGetPokemonByNameQuery } from "./store/apis/pokemon.api";

interface PokeInfoProps {
  name?: string;
  imagePath?: string;
}

const App = (): ReactElement => {
  const [pokeInfo, setPokeInfo] = useState<PokeInfoProps | null>(null);

  // directly param to test the hook
  const { data } = useGetPokemonByNameQuery("ditto");

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
          <SearchBar value="Search" action={searchPokemon} />
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
