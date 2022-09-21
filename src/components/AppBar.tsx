import { useAuthContext } from 'contexts/AuthContext';

function AppBar() {
  const { name } = useAuthContext();

  return (
    <div className="bg-slate-700 px-6 py-2 lg:px-8 lg:py-4 flex justify-between sticky top-0 shadow-md">
      <h1 className="font-bold lg:text-lg">QuizApp</h1>
      <p>{name ? 'Hi, ' + name : 'Please Login'}</p>
    </div>
  );
}

export default AppBar;
