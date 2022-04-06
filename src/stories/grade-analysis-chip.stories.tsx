import { ComponentStory, ComponentMeta } from "@storybook/react";
import GradeAnalysisChip from "../components/grade-analysis-chip";

export default {
  title: "GradeAnalysisChip",
  component: GradeAnalysisChip,
} as ComponentMeta<typeof GradeAnalysisChip>;

const Template: ComponentStory<typeof GradeAnalysisChip> = (args) => (
  <GradeAnalysisChip {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "",
  grade: 0,
};

export const Math = Template.bind({});

Math.args = {
  label: "Math",
  grade: 6,
};

export const History = Template.bind({});

History.args = {
  label: "History",
  grade: 5,
};
