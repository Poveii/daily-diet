import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDay, MEALS_COLLECTION } from '../storageConfig';

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    let meals: MealDay[] = storage ? JSON.parse(storage) : [];

    if (meals.length >= 1) {
      meals = meals
        .map((mealsDay) => {
          mealsDay.data = mealsDay.data.sort((a, b) =>
            a.time.localeCompare(b.time),
          );
          return mealsDay;
        })
        .sort((a, b) => a.title.localeCompare(b.title))
        .reverse();
    }

    return meals;
  } catch (error) {
    throw error;
  }
}
