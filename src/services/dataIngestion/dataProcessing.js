export const noiseFilter = (data) => {
  // Implement noise filtering logic
  console.log('Filtering data:', data);
  return data.filter(item => item.amount > 10 && ['Groceries', 'Utilities'].includes(item.category));
};

export const preprocessDataForFairness = (data) => {
  // Implement data preprocessing logic for fairness
  console.log('Preprocessing data for fairness:', data);
  return data;
};
