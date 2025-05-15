import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { Meal, MEALS_COLLECTION } from '../storageConfig';

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    // TODO: Validar antes de criar um novo MealDay se já existe esse dia.

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

    const storage = JSON.stringify([...storedMeals, mealDay]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
