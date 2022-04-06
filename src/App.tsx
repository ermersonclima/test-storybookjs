import { ReactElement } from 'react'
import BoxField from './components/box-field'
import SearchBar from './components/search-bar'
import ResultField from './components/result-field'

const App = (): ReactElement => {
  return (
    <>
      <BoxField title="Find pokemon info by name">
        <>
          <SearchBar value="Search" />
          <ResultField />
        </>
      </BoxField>
    </>
  )
}

export default App;
