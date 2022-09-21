type Answer = {
  id: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
}[];

const storage = {
  clearAnswer(): void {
    localStorage.removeItem('answer');
  },
  getAnswer(): Answer {
    return JSON.parse(localStorage.getItem('answer') || '[]');
  },
  saveAnswer(answer: Answer): void {
    localStorage.setItem('answer', JSON.stringify(answer));
  },
};

export default storage;
