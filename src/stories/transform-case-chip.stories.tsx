import { ComponentStory, ComponentMeta } from "@storybook/react";
import TransformCaseChip from "../components/transform-case-chip";

export default {
  title: "TransformCaseChip",
  component: TransformCaseChip,
} as ComponentMeta<typeof TransformCaseChip>;

const Template: ComponentStory<typeof TransformCaseChip> = (args) => (
  <TransformCaseChip {...args} />
);

export const Default = Template.bind({});

Default.args = {
  color: "",
  label: "",
};
