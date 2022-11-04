import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Button as ButtonComponent, ButtonProps} from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args: ButtonProps) => { return <ButtonComponent {...args} />; };

export const Button = Template.bind({});
Button.args = {
  text: "Hi there!",
  onClick: () => {
    alert(123);
  },
};
