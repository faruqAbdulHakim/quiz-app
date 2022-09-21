import { createRoot } from 'react-dom/client';

import QuizApp from './QuizApp';
import './index.css';
import { AuthContextProvider } from 'contexts/AuthContext';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthContextProvider>
    <QuizApp />
  </AuthContextProvider>
);
