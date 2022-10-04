// eslint-disable-next-line import/no-extraneous-dependencies
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {useState} from "react";
import {Switch as SwitchComponent, SwitchProps} from "./Switch";

export default {
  title: "Switch",
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

// eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
const Template: ComponentStory<typeof SwitchComponent> = (args: SwitchProps) => {
  const [isOnlineMode, setIsOnlineMode] = useState(false);

  const changeConnectionMode = (): void => {
    setIsOnlineMode(!isOnlineMode);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SwitchComponent
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      isLeftPosition={isOnlineMode}
      onChange={changeConnectionMode}
    />
  );
};

export const Switch = Template.bind({});
Switch.args = {isLeftPosition: false};