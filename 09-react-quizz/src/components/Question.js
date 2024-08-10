import Options from "./Options";
import { useQuizz } from "../contexts/QuizzContext";

function Question() {
  const { questions, index } = useQuizz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
