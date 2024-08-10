import { useQuizz } from "../contexts/QuizzContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuizz();
  return (
    <div className="start">
      <h2>Welcome to The React Quizz !</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
