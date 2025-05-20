import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { SectionList, View } from 'react-native';
import { useCallback, useState } from 'react';

import { mealsGetAll } from '@/storage/meals/mealsGetAll';
import { getMealsStatistics } from '@/storage/meals/mealsStatistics';
import { Meal, MealDay, MealsStatistics } from '@/storage/storageConfig';

import { ScoreBoard } from '@/components/ScoreBoard';

import {
  Container,
  Divider,
  DoneIndicator,
  EmptyMealsListText,
  Header,
  Logo,
  MealDate,
  MealsContainer,
  MealTime,
  MealTitle,
  MealWrapper,
  NewMealButton,
  NewMealText,
  NewMealTitle,
  Photo,
  PlusIcon,
} from './styles';

export function Home() {
  const [meals, setMeals] = useState<MealDay[]>([]);
  const [statistics, setStatistics] = useState<MealsStatistics>(
    {} as MealsStatistics,
  );

  const navigation = useNavigation();
  const theme = useTheme();

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  function handleOpenNewMeal() {
    navigation.navigate('newMeal');
  }

  function handleOpenMeal(meal: Meal) {
    navigation.navigate('meal', { meal });
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchStatistics() {
    try {
      const computedStatistics = await getMealsStatistics();
      setStatistics(computedStatistics);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      fetchStatistics();
    }, []),
  );

  return (
    <Container>
      <Header>
        <Logo />
        <Photo />
      </Header>

      <ScoreBoard
        percentage={statistics.percentage}
        totalResult={statistics.totalResult}
        onPress={handleOpenStatistics}
      />

      <MealsContainer>
        <>
          <NewMealTitle>Refeições</NewMealTitle>
          <NewMealButton activeOpacity={0.8} onPress={handleOpenNewMeal}>
            <PlusIcon />
            <NewMealText>Nova refeição</NewMealText>
          </NewMealButton>
        </>

        <SectionList
          sections={meals}
          style={{ marginTop: 32 }}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <MealDate>{title}</MealDate>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ marginBottom: 32 }} />
          )}
          renderItem={({ item }) => (
            <MealWrapper
              activeOpacity={0.6}
              onPress={() => handleOpenMeal(item)}
            >
              <MealTime>{item.time}</MealTime>
              <Divider />
              <MealTitle numberOfLines={1}>{item.name}</MealTitle>
              {item.isDiet ? (
                <DoneIndicator
                  style={{ backgroundColor: theme.COLORS.GREEN_MID }}
                />
              ) : (
                <DoneIndicator
                  style={{ backgroundColor: theme.COLORS.RED_MID }}
                />
              )}
            </MealWrapper>
          )}
          ListEmptyComponent={() => (
            <EmptyMealsListText>
              Nenhuma refeição na lista. Adicione uma no botão acima.
            </EmptyMealsListText>
          )}
        />
      </MealsContainer>
    </Container>
  );
}
