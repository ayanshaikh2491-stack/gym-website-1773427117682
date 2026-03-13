export const getGymData = async () => {
  const response = await fetch('/api/gym');
  const data = await response.json();
  return data;
};