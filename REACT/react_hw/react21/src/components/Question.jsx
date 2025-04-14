import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css"; // <-- Импортируем стили

function Question({ questionId }) {
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.questionnaire.questions.find((q) => q.id === questionId)
  );

  if (!question) return null;

  const handleChange = (e) => {
    dispatch(setAnswer({ questionId, answer: e.target.value }));
  };

  return (
    <div className={styles.questionContainer}>
      <h3 className={styles.questionTitle}>{question.question}</h3>
      {question.options.map((option, index) => (
        <label className={styles.optionLabel} key={index}>
          <input
            className={styles.radioInput}
            type="radio"
            name={`question-${questionId}`}
            value={option}
            checked={question.answer === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;