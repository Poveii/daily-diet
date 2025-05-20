import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { HeaderScreen } from '@/components/HeaderScreen';

import { Home } from '@/screens/Home';
import { Statistics } from '@/screens/Statistics';
import { NewMeal } from '@/screens/NewMeal';
import { Feedback } from '@/screens/Feedback';
import { Meal } from '@/screens/Meal';
import { EditMeal } from '@/screens/EditMeal';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="statistics"
        component={Statistics}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => <HeaderScreen iconColor={theme.COLORS.GREEN_DARK} />,
        }}
      />
      <Stack.Screen
        name="newMeal"
        component={NewMeal}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => <HeaderScreen title="Nova refeição" />,
        }}
      />
      <Stack.Screen name="feedback" component={Feedback} />
      <Stack.Screen
        name="meal"
        component={Meal}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => <HeaderScreen title="Refeição" />,
        }}
      />
      <Stack.Screen
        name="editMeal"
        component={EditMeal}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => <HeaderScreen title="Editar refeição" />,
        }}
      />
    </Stack.Navigator>
  );
}
