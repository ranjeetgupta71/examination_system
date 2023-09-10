import React from "react";

const ResultPage = ({ userAnswer, questionsAnswerData }) => {
  let totalMarks = 0;

  questionsAnswerData.forEach((question, index) => {
    if (question.answer === userAnswer[index]) {
      totalMarks += 1;
    }
  });

  return <p>Congratulation Your Score is {totalMarks}</p>;
};
export default ResultPage;
