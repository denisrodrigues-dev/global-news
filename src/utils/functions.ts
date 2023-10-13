export const calculateDays = (date: string) => {
  const removeTime = date.split(' ')[0].split('/').reverse().join('/');
  const today = new Date();
  const publishedDate = new Date(`${removeTime} ${date.split(' ')[1]}`);
  const differenceInTime = today.getTime() - publishedDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const daysText = Math.round(differenceInDays) > 1 ? 'dias' : 'dia';
  return (`${Math.round(differenceInDays)} ${daysText}`);
};
