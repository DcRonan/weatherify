const convertUnixToTime = (time) => {
  const ms = time * 1000;
  const obj = new Date(ms);
  const dateFormat = obj.toLocaleTimeString();
  return dateFormat;
};

export default convertUnixToTime;
