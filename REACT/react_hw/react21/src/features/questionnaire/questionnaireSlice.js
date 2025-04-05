import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Question 1?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 2,
      question: "Question 2?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 3,
      question: "Question 3?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 4,
      question: "Question 4?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
    {
      id: 5,
      question: "Question 5?",
      options: ["Option 1", "Option 2"],
      answer: null,
    },
  ],
  submitted: false,
  result: null,
  score: 0, // Добавим поле для хранения итогового счёта
};

const correctAnswers = {
  1: "Option 1",
  2: "Option 2",
  3: "Option 1",
  4: "Option 2",
  5: "Option 1",
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      state.submitted = true;

      // Подсчитываем очки
      let totalScore = 0;
      state.questions.forEach((q) => {
        if (q.answer === correctAnswers[q.id]) {
          totalScore += 1;
        }
      });

      // Сохраняем итоговый счёт
      state.score = totalScore;

      // Пример текста результата
      state.result = "Ваши ответы были успешно отправлены!";
    },
  },
});

export const { setAnswer, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;