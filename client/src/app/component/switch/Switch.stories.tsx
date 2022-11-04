import {ComponentStory, ComponentMeta} from "@storybook/react";
import {useState} from "react";
import {Switch as SwitchComponent, SwitchProps} from "./Switch";

export default {
  title: "Switch",
  component: SwitchComponent,
  args: {isLeftPosition: false},
  argTypes: {isLeftPosition: {type: "boolean"}},
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (args: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeChecked = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchComponent
      {...args}
      isLeftPosition={isChecked}
      onChange={changeChecked}
    />
  );
};

export const Switch = Template.bind({});

export const SwitchChecked: ComponentStory<typeof SwitchComponent> = (args: SwitchProps) => {

  return (
    <SwitchComponent
      {...args}
      isLeftPosition
    />
  );
};
SwitchChecked.args = {isLeftPosition: true};
