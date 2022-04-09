import React, { useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
const TOTAL_QUESTIONS = 0;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUseranswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  const start = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextquestion = () => {};
  return (
    <div className="App">
      <h1>Quizz</h1>
      <button className="start" onClick={start}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Qusteions...</p>
      <QuestionsCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextquestion}>
        next
      </button>
    </div>
  );
};

export default App;
