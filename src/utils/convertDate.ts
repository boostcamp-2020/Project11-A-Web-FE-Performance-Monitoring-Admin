const convertDate = (date: string): string => {
  const convertedDate = new Date(date)
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, '/')
    .replace('T', ' ');
  return convertedDate;
};

export default convertDate;
