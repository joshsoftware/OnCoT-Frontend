const getCurrentTime = (remainingTime) => {
  /*
  get remainingTimer from the container
  splitting remaining time in seconds to time in "hours:minutes:seconds" format
  */
  const hours = Math.floor((remainingTime / (60 * 60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const minutes = Math.floor((remainingTime / (60)) % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const seconds = Math.floor(remainingTime % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });

  let time;

  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    // if remainingTime < 0 timer gets Expired
    time = 'Expired';
  } else {
    // else return the remainingTime in string
    time = `${hours}:${minutes}:${seconds}`;
  }
  return time;
};

const ifSufficientTime = (remainingTime) => {
  const hours = Math.floor((remainingTime / (60 * 60)) % 60);
  const minutes = Math.floor((remainingTime / (60)) % 60);
  if (hours === 0 && minutes < 10) {
    return false;
  }
  return true;
};

export { ifSufficientTime };
export { getCurrentTime };
