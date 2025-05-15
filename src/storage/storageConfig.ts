export const MEALS_COLLECTION = '@daily-diet:meals';

export type MealDay = {
  title: string;
  data: Meal[];
};

export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isDiet: boolean;
};
