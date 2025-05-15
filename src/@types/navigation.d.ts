import { MealDay } from '@/storage/storageConfig';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: {
        meals: MealDay[];
      };
    }
  }
}
