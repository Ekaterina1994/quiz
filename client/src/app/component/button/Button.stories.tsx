// eslint-disable-next-line import/no-extraneous-dependencies
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Button, ButtonProps} from "./Button";

export default {
  title: "Example/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {return <Button {...args} />;};

export const ButtonOrdinary = Template.bind({});
ButtonOrdinary.args = {
  text: "Hi there!",
  onClick: () => {alert(123);},
};