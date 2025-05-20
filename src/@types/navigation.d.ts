import { Meal as MealType } from '@/storage/storageConfig';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      feedback: {
        type: 'positive' | 'negative';
      };
      meal: {
        meal: MealType;
      };
      editMeal: {
        meal: MealType;
      };
    }
  }
}
