import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Question } from '.';
import Timer from './Timer';
import storage from 'helpers/storage';
import shuffleArray from 'helpers/shuffleArray';

interface Props {
  questions: Question[];
}

function Form({ questions }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(questions.length * 10);
  const [answerList, setAnswerList] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    storage.clearAnswer();
    const interval = setInterval(() => {
      setTimer((previousValue) => previousValue - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setAnswerList(
      shuffleArray([
        questions[index].correct_answer,
        ...questions[index].incorrect_answers,
      ])
    );
  }, [index, questions]);

  useEffect(() => {
    if (timer <= 0) {
      navigate('/result');
    }
  }, [timer, navigate]);

  const onUserAnswer = (userAnswer: string) => {
    const answer = storage.getAnswer();
    answer.push({
      id: index,
      question: questions[index].question,
      userAnswer: userAnswer,
      correctAnswer: questions[index].correct_answer,
    });
    storage.saveAnswer(answer);

    if (index + 1 === questions.length) {
      navigate('/result');
    } else {
      setIndex((previousValue) => previousValue + 1);
    }
  };

  return (
    <div>
      <div className="max-w-[540px] text-center">
        <p className="text-xs lg:text-sm text-slate-400">
          Quiz {index + 1} of {questions.length}
        </p>
        <h2
          className="text-xl lg:text-2xl"
          dangerouslySetInnerHTML={{ __html: questions[index].question }}
        ></h2>
        <p className="mt-6">Answer:</p>
        <div className="flex flex-col gap-2 mt-2 w-max mx-auto max-w-[95vw]">
          {answerList.map((answer, idx) => {
            return (
              <button
                key={idx}
                type="button"
                className="bg-slate-700 rounded-md text-center py-2 px-6 hover:brightness-110 min-w-[300px]"
                onClick={() => onUserAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></button>
            );
          })}
        </div>
      </div>
      <Timer time={timer} />
    </div>
  );
}

export default Form;
