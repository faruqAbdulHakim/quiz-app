import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

function Form() {
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setName } = useAuthContext();
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);

    const value = inputRef.current?.value.trim();
    if (!value || value === '') {
      setError(true);
    } else {
      setName(value);
      navigate('/home');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name..."
          className="bg-slate-700 px-4 py-2 rounded-md outline-none text-sm lg:text-base"
          autoFocus
        />
        <button
          type="submit"
          className="ml-2 bg-emerald-700 shadow-md shadow-emerald-700/50 hover:brightness-110 rounded-md px-4 py-2 text-sm lg:text-base"
        >
          Login
        </button>
      </form>
      {error && (
        <p className="text-red-500 animate-pulse mt-1 ml-2 text-xs lg:text-sm">
          Please enter your name!
        </p>
      )}
    </div>
  );
}

export default Form;
