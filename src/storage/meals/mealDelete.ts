import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { Meal, MEALS_COLLECTION } from '../storageConfig';

export async function mealDelete(mealDeleted: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const filteredMeals = storedMeals.filter((mealDay) => {
      if (mealDay.title === mealDeleted.date) {
        if (mealDay.data.length <= 1) {
          return mealDay.title !== mealDeleted.date;
        } else {
          mealDay.data = mealDay.data.filter(
            (meal) => meal.id !== mealDeleted.id,
          );
        }
      }
      return mealDay;
    });

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(filteredMeals));
  } catch (error) {
    throw error;
  }
}
