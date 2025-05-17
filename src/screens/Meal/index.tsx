import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { Meal as MealType } from '@/storage/storageConfig';

import {
  ButtonsWrapper,
  Container,
  DateAndTime,
  DateAndTimeWrapper,
  DeleteMealButton,
  DeleteMealText,
  DietTag,
  DietTagIndicator,
  DietTagText,
  EditMealButton,
  EditMealText,
  MealContent,
  MealDescription,
  MealInfo,
  MealName,
  MealWrapper,
  Title,
} from './styles';

type RouteParams = {
  meal: MealType;
};

export function Meal() {
  const route = useRoute();
  const theme = useTheme();

  const { meal } = route.params as RouteParams;

  const bgcolor = meal.isDiet
    ? theme.COLORS.GREEN_LIGHT
    : theme.COLORS.RED_LIGHT;

  function handleEditMeal() {}

  function handleDeleteMeal() {}

  return (
    <Container $bgcolor={bgcolor}>
      <MealContent>
        <MealWrapper>
          <MealInfo>
            <MealName>{meal.name}</MealName>
            <MealDescription>
              {meal.description === '' ? 'Sem descrição' : meal.description}
            </MealDescription>
          </MealInfo>

          <DateAndTimeWrapper>
            <Title>Data e hora</Title>
            <DateAndTime>
              {meal.date} às {meal.time}
            </DateAndTime>
          </DateAndTimeWrapper>

          <DietTag>
            <DietTagIndicator $color={meal.isDiet ? 'green' : 'red'} />
            <DietTagText>
              {meal.isDiet ? 'dentro da dieta' : 'fora da dieta'}
            </DietTagText>
          </DietTag>
        </MealWrapper>

        <ButtonsWrapper>
          <EditMealButton activeOpacity={0.6} onPress={handleEditMeal}>
            <PencilSimpleLine size={18} color={theme.COLORS.WHITE} />
            <EditMealText>Editar refeição</EditMealText>
          </EditMealButton>

          <DeleteMealButton activeOpacity={0.6} onPress={handleDeleteMeal}>
            <Trash size={18} color={theme.COLORS.GRAY_100} />
            <DeleteMealText>Excluir refeição</DeleteMealText>
          </DeleteMealButton>
        </ButtonsWrapper>
      </MealContent>
    </Container>
  );
}
