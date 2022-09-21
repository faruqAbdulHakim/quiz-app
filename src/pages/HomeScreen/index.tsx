import { Link } from 'react-router-dom';

import AppName from 'components/AppName';
import PageLayout from 'components/PageLayout';
import useIsLoggedIn from 'hooks/useIsLoggedIn';
import { useAuthContext } from 'contexts/AuthContext';

function HomeScreen() {
  const { setName } = useAuthContext();
  const { name } = useIsLoggedIn();

  const logoutHandler = () => {
    setName('');
  };

  return (
    <PageLayout>
      <div className="flex-1 flex flex-col items-center mt-16 lg:mt-32 gap-4 lg:gap-6">
        <AppName />
        <p className="text-center text-xs lg:text-sm text-slate-400">
          Hi, {name}. <br />
          Ready to start the questions? Click start button below.
        </p>
        <Link
          to="../questions"
          className="bg-emerald-700 shadow-md shadow-emerald-700/50 px-8 py-2 rounded-md font-semibold lg:text-lg animate-pulse hover:animate-none hover:brightness-110 transition-all"
        >
          Start
        </Link>
        <button
          type="button"
          onClick={logoutHandler}
          className="bg-red-500 shadow-md shadow-red-500/50 px-8 py-2 rounded-md font-semibold lg:text-lg opacity-40 hover:opacity-100 transition-all"
        >
          Log Out
        </button>
      </div>
    </PageLayout>
  );
}

export default HomeScreen;
