import { ReactElement } from 'react'
import BoxField from './components/box-field'
import SearchBar from './components/search-bar'

const App = (): ReactElement => {
  return (
    <>
      <BoxField>
        <SearchBar value="Search" />
      </BoxField>
    </>
  )
}

export default App;
