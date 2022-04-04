import { ReactElement } from "react";
import TransformCaseChip from "./components/transform-case-chip";
import GradeAnalysisChip from "./components/grade-analysis-chip";

const App = (): ReactElement => {
  return (
    <>
      <GradeAnalysisChip grade={0} />
      <TransformCaseChip />
      <TransformCaseChip color='#f00' />
      <TransformCaseChip color='#0f0' />
      <TransformCaseChip color='#00f' />
    </>
  )
}

export default App;
