import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

export default function useIsLoggedIn(): { name: string } {
  const { name } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (name === '') {
      navigate('/');
    }
  }, [name, navigate]);

  return { name };
}
