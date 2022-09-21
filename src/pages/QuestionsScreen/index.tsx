import PageLayout from 'components/PageLayout';
import useFetch from 'hooks/useFetch';
import Form from './Form';
import useIsLoggedIn from 'hooks/useIsLoggedIn';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ApiResponse {
  response_code: number;
  results: Question[];
}

function QuestionsScreen() {
  const { data, error } = useFetch<ApiResponse>(
    'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
  );
  useIsLoggedIn();

  return (
    <PageLayout>
      <div className="flex-1 flex justify-center items-center">
        {!data ? (
          <p className="animate-pulse text-xs lg:text-sm text-slate-400">
            Loading...
          </p>
        ) : error ? (
          <p className="ext-xs lg:text-sm text-red-500">
            Something Wrong on fetching the questions
          </p>
        ) : (
          <Form questions={data.results} />
        )}
      </div>
    </PageLayout>
  );
}

export default QuestionsScreen;
