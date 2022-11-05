import {ComponentStory, ComponentMeta} from "@storybook/react";
import {useEffect, useState} from "react";
import {Switch as SwitchComponent, SwitchProps} from "./Switch";

export default {
  title: "Switch",
  component: SwitchComponent,
  args: {isLeftPosition: false},
  argTypes: {isLeftPosition: {type: "boolean"}},
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(props.isLeftPosition);
  const changeChecked = (): void => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    changeChecked();
  }, [props.isLeftPosition]);

  return (
    <SwitchComponent
      isLeftPosition={isChecked}
      onChange={changeChecked}
    />
  );
};

export const Switch = Template.bind({});

Switch.args = {isLeftPosition: true};
