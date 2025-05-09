import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/screens/Home';
import { Statistics } from '@/screens/Statistics';
import { NewMeal } from '@/screens/NewMeal';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="statistics" component={Statistics} />
      <Stack.Screen name="newMeal" component={NewMeal} />
    </Stack.Navigator>
  );
}
