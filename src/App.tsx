import { ReactElement } from "react";
import TransformCaseChip from "./components/transform-case-chip";

const App = (): ReactElement => {
  return (
    <>
      <TransformCaseChip />
      <TransformCaseChip color='#f00' />
      <TransformCaseChip color='#0f0' />
      <TransformCaseChip color='#00f' />
    </>
  )
}

export default App;
