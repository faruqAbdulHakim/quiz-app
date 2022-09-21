import formatTime from 'helpers/formatTime';

interface Props {
  time: number;
}

function Timer({ time }: Props) {
  return (
    <div className="fixed bottom-0 left-0 bg-slate-700 py-1 px-2 rounded-tr-md">
      {formatTime(time)}
    </div>
  );
}

export default Timer;
