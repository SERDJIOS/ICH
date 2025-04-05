import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import styles from "./App.module.css"; // <-- Импортируем стили

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} questionId={q.id} />
      ))}

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>

      <Result />
    </div>
  );
}

export default App;