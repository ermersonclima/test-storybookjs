import { ReactElement } from "react";
import HomeChip from "./components/home-chip.tsx";

const App = (): ReactElement => {
  return (
    <>
      <HomeChip />
      <HomeChip color='#f00' />
      <HomeChip color='#0f0' />
      <HomeChip color='#00f' />
    </>
  )
}

export default App;
