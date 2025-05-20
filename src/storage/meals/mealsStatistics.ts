import { mealsGetAll } from './mealsGetAll';

export async function getMealsStatistics() {
  const meals = await mealsGetAll();

  const mealsData = meals.flatMap(({ data }) => data);

  const mealsRegistered = mealsData.length;

  const mealsInDietNumber = mealsData.reduce((acc, { isDiet }) => {
    if (isDiet === true) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const mealsInDietPercentage = (
    (mealsInDietNumber / mealsRegistered) *
    100
  ).toFixed(2);

  const mealsDietInARowList = meals.map((mealsDay) => {
    const mealsNumber = mealsDay.data.reduce((acc, meal, index) => {
      if (meal.isDiet === true && meal.date === mealsDay.title) {
        const previousMeal = mealsDay.data[index - 1];
        if (index >= 2) {
          if (previousMeal.isDiet === false) {
            return acc;
          }
        }
        return acc + 1;
      }
      return acc;
    }, 0);
    return mealsNumber;
  });
  const mealsDietInARow = Math.max(...mealsDietInARowList);

  const mealsNotInDiet = mealsRegistered - mealsInDietNumber;

  const totalResultInDiet = Number(mealsInDietPercentage) >= 50 ? true : false;

  return {
    totalResult: totalResultInDiet,
    percentage: mealsInDietPercentage.replace('.', ','),
    bestInARowMealsInDiet: mealsDietInARow,
    mealsRegistered: mealsRegistered,
    mealsInDiet: mealsInDietNumber,
    mealsNotInDiet: mealsNotInDiet,
  };
}
