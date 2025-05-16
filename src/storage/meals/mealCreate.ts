import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { Meal, MEALS_COLLECTION } from '../storageConfig';

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const mealDateExists = storedMeals.find(
      ({ title }) => title === newMeal.date,
    );

    let storage = '';
    const mealDay = {
      title: newMeal.date,
      data: [
        {
          id: newMeal.id,
          name: newMeal.name,
          description: newMeal.description,
          date: newMeal.date,
          time: newMeal.time,
          isDiet: newMeal.isDiet,
        },
      ],
    };

    if (mealDateExists) {
      const newStoredMeals = storedMeals.map((item) => {
        if (item.title === newMeal.date) {
          item.data.push(newMeal);
        }
        return item;
      });
      storage = JSON.stringify(newStoredMeals);
    } else {
      storage = JSON.stringify([...storedMeals, mealDay]);
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
