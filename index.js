import _ from 'lodash';

export default function showInfo(content) {
  const data = content.trim().split('\n').slice(1).map((row) => row.split(',').slice(0));

  // step 1
  console.log(`Count: ${data.length}`);

  // step 2
  const categories = data.map((types) => types[1]);

  const sortCategories = new Set(categories);
  const uniqueCategories = [...sortCategories];

  console.log(`Categories: ${(uniqueCategories).join(', ')}`);

  // step 3
  const averageDishPrice = data.map((price) => Number(price[4]));
  const sumDishPrice = averageDishPrice.reduce((total, current) => total + current, 0);
  const countDish = averageDishPrice.length;
  const averagePrice = sumDishPrice / countDish;
  
  console.log(`Average price: ${Math.ceil(averagePrice)}`);

  // step 4
  const minCalories = _.minBy(data, (cal) => cal[3]);
  const minDishCalories = minCalories[0];

  const maxCalories = _.maxBy(data, (cal) => cal[3]);
  const maxDishCalories = maxCalories[0];

  console.log(`Calories: min - ${minDishCalories}, max - ${maxDishCalories}`);

}