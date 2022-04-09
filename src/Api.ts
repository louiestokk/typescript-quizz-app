import axios from "axios";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  tyep: string;
};

export const fetchQuestions = async (amount: number) => {
  const { data } = await axios(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  );
  console.log(data);
};
