import AsyncStorage from '@react-native-async-storage/async-storage';
import { randomUUID } from 'expo-crypto';

import { mealsGetAll } from './mealsGetAll';
import { mealDelete } from './mealDelete';

import { Meal, MealDay, MEALS_COLLECTION } from '../storageConfig';

export async function mealEdit(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const oldMeal = storedMeals
      .flatMap(({ data }) => data)
      .filter(({ id }) => id === newMeal.id)[0];

    let newMealsStorage = [] as MealDay[];
    if (newMeal.date !== oldMeal.date) {
      const mealDateExists = storedMeals
        .flatMap(({ title }) => title)
        .find((title) => title === newMeal.date);
      newMeal.id = randomUUID();
      if (mealDateExists) {
        await mealDelete(oldMeal);
        const newStoredMeals = await mealsGetAll();
        const newMealListEdited = newStoredMeals.map((mealDay) => {
          if (mealDay.title === newMeal.date) {
            mealDay.data.push(newMeal);
          }
          return mealDay;
        });
        newMealsStorage = newMealListEdited;
      } else {
        await mealDelete(oldMeal);
        const newStoredMeals = await mealsGetAll();
        const newMealDay = {
          title: newMeal.date,
          data: [newMeal],
        };
        newMealsStorage = [...newStoredMeals, newMealDay];
      }
    } else {
      newMealsStorage = storedMeals.map((mealsDay) => {
        if (mealsDay.title === newMeal.date) {
          mealsDay.data = mealsDay.data.map((meal) => {
            if (meal.id === newMeal.id) {
              return newMeal;
            }
            return meal;
          });
        }
        return mealsDay;
      });
    }
    const newMeals = JSON.stringify(newMealsStorage);

    await AsyncStorage.setItem(MEALS_COLLECTION, newMeals);
  } catch (error) {
    throw error;
  }
}
