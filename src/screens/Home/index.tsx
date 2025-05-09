import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { SectionList, View } from 'react-native';

import { ScoreBoard } from '@/components/ScoreBoard';

import {
  Container,
  Divider,
  DoneIndicator,
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
  const data = [
    {
      title: '12.08.22',
      data: [
        {
          id: '1',
          time: '20:00',
          title: 'X-tudo',
          isDone: false,
        },
        {
          id: '2',
          time: '16:00',
          title: 'Whey protein com leite',
          isDone: true,
        },
        {
          id: '3',
          time: '12:30',
          title: 'Salada cesar com frango grelhado',
          isDone: true,
        },
        {
          id: '4',
          time: '09:30',
          title: 'Vitamina de banana com abacate',
          isDone: true,
        },
      ],
    },
    {
      title: '11.08.22',
      data: [
        {
          id: '1',
          time: '20:00',
          title: 'X-tudo',
          isDone: false,
        },
        {
          id: '2',
          time: '16:00',
          title: 'Whey protein com leite',
          isDone: true,
        },
        {
          id: '3',
          time: '12:30',
          title: 'Salada cesar com frango grelhado',
          isDone: true,
        },
        {
          id: '4',
          time: '09:30',
          title: 'Vitamina de banana com abacate',
          isDone: true,
        },
      ],
    },
  ];

  const navigation = useNavigation();
  const theme = useTheme();

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  function handleOpenNewMeal() {
    navigation.navigate('newMeal');
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Photo />
      </Header>

      <ScoreBoard onPress={handleOpenStatistics} />

      <MealsContainer>
        <>
          <NewMealTitle>Refeições</NewMealTitle>
          <NewMealButton activeOpacity={0.8} onPress={handleOpenNewMeal}>
            <PlusIcon />
            <NewMealText>Nova refeição</NewMealText>
          </NewMealButton>
        </>

        <SectionList
          sections={data}
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
            <MealWrapper>
              <MealTime>{item.time}</MealTime>
              <Divider />
              <MealTitle numberOfLines={1}>{item.title}</MealTitle>
              {item.isDone ? (
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
        />
      </MealsContainer>
    </Container>
  );
}
