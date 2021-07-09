export const getTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;
  const out = `${hours ? `${hours < 10 ? `0${hours}` : hours}:` : ""}${
    hours || minutes ? `${minutes < 10 ? `0${minutes}` : minutes}:` : ""
  }${seconds < 10 ? `0${seconds}` : seconds}`;
  return out;
  // return new Date(time * 1000).toISOString().substr(11, 8);
};
