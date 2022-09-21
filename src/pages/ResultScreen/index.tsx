import { Link } from 'react-router-dom';
import PageLayout from 'components/PageLayout';
import storage from 'helpers/storage';
import useIsLoggedIn from 'hooks/useIsLoggedIn';

function ResultScreen() {
  useIsLoggedIn();

  const answers = storage.getAnswer();
  let score = 0;
  for (const answer of answers) {
    if (answer.correctAnswer === answer.userAnswer) score += 1;
  }

  return (
    <PageLayout>
      <div className="flex-1 flex flex-col items-center mt-6 lg:mt-14">
        <h2 className="text-2xl lg:text-3xl font-bold">Result</h2>
        <p className="mt-2">
          Your Final Score: {score} / {answers.length}
        </p>
        <div className="mt-6 space-y-3 max-w-[700px] w-full">
          {answers.map((answer) => {
            const isTrue = answer.userAnswer === answer.correctAnswer;
            return (
              <div
                key={answer.id}
                className="rounded-md shadow-md p-4 bg-slate-700"
              >
                <p
                  className="font-semibold"
                  dangerouslySetInnerHTML={{ __html: answer.question }}
                ></p>
                <p
                  className={`ml-2 mt-2 ${
                    isTrue ? 'text-emerald-500' : 'text-red-400'
                  }`}
                >
                  Your Answer:{' '}
                  <span
                    dangerouslySetInnerHTML={{ __html: answer.userAnswer }}
                  ></span>
                </p>
                {!isTrue && (
                  <p className="ml-2 text-red-400">
                    Correct Answer:{' '}
                    <span
                      dangerouslySetInnerHTML={{ __html: answer.correctAnswer }}
                    ></span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Link
        to="/home"
        className="w-max my-4 mx-auto bg-emerald-700 shadow-md shadow-emerald-700/50 px-8 py-2 rounded-md font-semibold lg:text-lg animate-pulse hover:animate-none hover:brightness-110 transition-all"
      >
        Start Quiz Again
      </Link>
    </PageLayout>
  );
}

export default ResultScreen;
