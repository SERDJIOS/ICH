import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

function Result() {
  const submitted = useSelector((state) => state.questionnaire.submitted);
  const result = useSelector((state) => state.questionnaire.result);
  const score = useSelector((state) => state.questionnaire.score);

  if (!submitted) {
    // Если анкета не отправлена, компонент не отображаем
    return null;
  }

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.resultTitle}>Результат</h2>
      <p className={styles.resultText}>{result}</p>
      <p className={styles.resultText}>Your Score: {score}</p>
    </div>
  );
}

export default Result;