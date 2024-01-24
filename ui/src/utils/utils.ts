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

const getDateString = (seconds: number) : string => {
  const date: Date = new Date(seconds * 1000)
  var options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-US", options)
}

function getRemainingTime(seconds: number): string {
  const target = new Date(seconds*1000);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = target.getTime() - currentDate.getTime();

  if(difference < 0){
    return "Closed"
  }

  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  const monthsLeft = Math.ceil(daysLeft / 30);
  const yearsLeft = Math.ceil(monthsLeft / 12);

  if (daysLeft > 30) {
    if (monthsLeft > 12) {
      return `${yearsLeft} year${yearsLeft > 1 ? 's' : ''} left`;
    } else {
      return `${monthsLeft} month${monthsLeft > 1 ? 's' : ''} left`;
    }
  } else {
    return `${daysLeft} day${daysLeft > 1 ? 's' : ''} left`;
  }
}

export { getRandomNumber, getDateString, getRemainingTime };
