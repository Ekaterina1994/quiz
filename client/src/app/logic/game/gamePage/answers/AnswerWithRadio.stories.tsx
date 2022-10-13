// eslint-disable-next-line import/no-extraneous-dependencies
import {ComponentMeta} from "@storybook/react";
import {useState} from "react";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {AnswerWithRadio as AnswerWithRadioComponent} from "./AnswerWithRadio";

export default {
  title: "AnswerWithRadio",
  component: AnswerWithRadioComponent,
} as ComponentMeta<typeof AnswerWithRadioComponent>;

// eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
// @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Template = () => {
  const [, setCheckedAnswerId] = useState<string | null>(null);

  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  const answerVariants = [
    {
      id: "0",
      answer: "meat",
    },
    {
      id: "1",
      answer: "cherry",
    },
    {
      id: "2",
      answer: "apple",
    },
  ];

  return (answerVariants.map((answerVariant: AnswerVariantModel) => {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <AnswerWithRadioComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        key={answerVariant.id}
        answerVariant={answerVariant}
        setCheckedAnswerId={setCheckedAnswerId}
      />
    );
  })
  );
};

export const AnswerWithRadio = Template.bind({});
