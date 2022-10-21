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
  const [isOnlineMode, setIsOnlineMode] = useState(false);

  const changeConnectionMode = (): void => {
    setIsOnlineMode(!isOnlineMode);
  };

  return (
    <SwitchComponent
      {...args}
      isLeftPosition={isOnlineMode}
      onChange={changeConnectionMode}
    />
  );
};

export const Switch = Template.bind({});
Switch.args = {isLeftPosition: true};