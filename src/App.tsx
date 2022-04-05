import { ReactElement } from "react";
import TransformCaseChip from "./components/transform-case-chip";
import GradeAnalysisChip from "./components/grade-analysis-chip";

const App = (): ReactElement => {
  return (
    <>
      <GradeAnalysisChip grade={0} />
      <TransformCaseChip label="Storybook" />
    </>
  )
}

export default App;
