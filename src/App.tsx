import React, { useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
import { QuestionsState, fetchQuestions } from "./Api";
import { GlobalStyle, Wrapper } from "./App.styles";
const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUseranswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  const start = async () => {
    try {
      setLoading(true);
      setgameOver(false);
      const newQuestions = await fetchQuestions(TOTAL_QUESTIONS);
      setQuestions(newQuestions);
      setScore(0);
      setUseranswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answers === answer;
      if (correct) {
        setScore((prev) => prev + 1);
        const answerobject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answers,
        };
        setUseranswers((prev) => [...prev, answerobject]);
      }
    }
  };
  const nextquestion = () => {
    const nextQuestion = number + 1;
    setNumber(nextQuestion);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quizz</h1>
        {gameOver && (
          <button className="start" onClick={start}>
            Start
          </button>
        )}

        {!gameOver && <p className="score">Score:{score}</p>}
        {loading && <p>Loading Qusteions...</p>}
        {!loading && !gameOver && (
          <QuestionsCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        <button className="next" onClick={nextquestion}>
          next
        </button>
      </Wrapper>
    </>
  );
};

export default App;
