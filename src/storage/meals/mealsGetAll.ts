import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDay, MEALS_COLLECTION } from '../storageConfig';

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealDay[] = storage ? JSON.parse(storage) : [];

    // TODO: Formatar o meals para que retorne elas em ordem decrescente

    return meals;
  } catch (error) {
    throw error;
  }
}
