import axios from "axios";
import { shufflearray } from "./utils";
export type Question = {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const fetchQuestions = async (amount: number) => {
  const { data } = await axios(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  );

  return data.results.map((question: Question) => ({
    ...question,
    answers: shufflearray([
      ...question.incorrect_answers,
      question.correct_answers,
    ]),
  }));
};
