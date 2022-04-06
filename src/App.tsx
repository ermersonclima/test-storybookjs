import { ReactElement } from 'react'
import BoxField from './components/box-field'
import SearchBar from './components/search-bar'
import ResultField from './components/result-field'
import { useGetPokemonByNameQuery } from './store/apis/pokemon.api'

const App = (): ReactElement => {
  // directly param to test the hook
  const {data} = useGetPokemonByNameQuery('ditto')

  const searchPokemon = () => {
    console.log(data)
  }

  return (
    <>
      <BoxField title="Find pokemon info by name">
        <>
          <SearchBar value="Search" action={searchPokemon}/>
          <ResultField />
        </>
      </BoxField>
    </>
  )
}

export default App;
