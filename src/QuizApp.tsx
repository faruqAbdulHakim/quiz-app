import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from 'pages/WelcomeScreen';
import HomeScreen from 'pages/HomeScreen';
import QuestionsScreen from 'pages/QuestionsScreen';
import ResultScreen from 'pages/ResultScreen';

function QuizApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/questions" element={<QuestionsScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default QuizApp;
