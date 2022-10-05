// eslint-disable-next-line import/no-extraneous-dependencies
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {AnswerWithRadio as AnswerWithRadioComponent, AnswerWithRadioProps} from "./AnswerWithRadio";

export default {
  title: "AnswerWithRadio",
  component: AnswerWithRadioComponent,
} as ComponentMeta<typeof AnswerWithRadioComponent>;

// eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
const Template: ComponentStory<typeof AnswerWithRadioComponent> = (args: AnswerWithRadioProps) => {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  return <AnswerWithRadioComponent {...args} />;
};

export const AnswerWithRadio = Template.bind({});
AnswerWithRadio.args = {answerVariant: 'Text'};