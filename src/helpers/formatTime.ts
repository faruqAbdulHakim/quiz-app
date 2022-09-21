function padLeadingZeros(num: number, size: number): string {
  let s = `${num}`;
  while (s.length < size) s = '0' + s;
  return s;
}

function getHours(time: number): number {
  return Math.floor(time / 3600);
}

function getMinutes(time: number): number {
  return Math.floor(time / 60);
}

function getSeconds(time: number): number {
  return time % 60;
}

function formatTime(time: number): string {
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);

  return `${hours > 0 ? `${hours}:` : ''}${
    minutes > 0 ? padLeadingZeros(minutes, 2) + ':' : ''
  }${padLeadingZeros(seconds, 2)}`;
}

export default formatTime;
