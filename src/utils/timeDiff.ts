const timeDiff = (cur: any, prev: any) => {
  const min = 60 * 1000;
  const hour = min * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  const elapsed = cur - prev;
  if (elapsed < min) {
    const elapsedSec = Math.round(elapsed / 1000);
    return `${elapsedSec} ${elapsedSec === 1 ? 'second' : 'seconds'} ago`;
  }
  if (elapsed < hour) {
    const elapsedMin = Math.round(elapsed / min);
    return `${elapsedMin} ${elapsedMin === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (elapsed < day) {
    const elapsedHour = Math.round(elapsed / hour);
    return `${elapsedHour} ${elapsedHour === 1 ? 'hour' : 'hours'} ago`;
  }
  if (elapsed < month) {
    const elapsedDay = Math.round(elapsed / day);
    return `${elapsedDay} ${elapsedDay === 1 ? 'day' : 'days'} ago`;
  }
  if (elapsed < year) {
    const elapsedMonth = Math.round(elapsed / month);
    return `${elapsedMonth} ${elapsedMonth === 1 ? 'month' : 'months'} ago`;
  }
  const elapsedYear = Math.round(elapsed / year);
  return `${elapsedYear} ${elapsedYear === 1 ? 'year' : 'years'} ago`;
};

export default timeDiff;
