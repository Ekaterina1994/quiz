import {ComponentMeta} from "@storybook/react";
import {useState} from "react";
import {AnswerVariantModel} from "src/app/model/AnswerVariantModel";
import {AnswerWithRadio as AnswerWithRadioComponent} from "./AnswerWithRadio";

export default {
  title: "AnswerWithRadio",
  component: AnswerWithRadioComponent,
} as ComponentMeta<typeof AnswerWithRadioComponent>;

const Template: () => JSX.Element[] = () => {
  const [, setCheckedAnswerId] = useState<string | null>(null);

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
      <AnswerWithRadioComponent
        key={answerVariant.id}
        answerVariant={answerVariant}
        setCheckedAnswerId={setCheckedAnswerId}
      />
    );
  })
  );
};

export const AnswerWithRadio = Template.bind({});
