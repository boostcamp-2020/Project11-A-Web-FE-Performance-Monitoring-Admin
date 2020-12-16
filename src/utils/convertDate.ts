const convertDate = (date: string): string => {
  const newDate = new Date(date);
  return `${newDate.getFullYear()}년 ${
    newDate.getMonth() + 1
  }월 ${newDate.getDate()}일 ${newDate.getHours()}시 ${newDate.getMinutes()}분`;
};

export default convertDate;
