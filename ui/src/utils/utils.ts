function getRandomNumber(min: number, max: number): number {
  // Ensure that the provided numbers are positive
  if (min < 0 || max < 0) {
    throw new Error('Both numbers must be positive');
  }

  // Swap min and max if min is greater than max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Calculate the random number
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return randomNumber;
}

const getDateString = (seconds: number) => {
  const date: Date = new Date(seconds * 1000)
  var options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-US", options)
}

export { getRandomNumber, getDateString };
