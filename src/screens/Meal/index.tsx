import { useNavigation, useRoute } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Alert, Modal } from 'react-native';
import { useState } from 'react';

import { Meal as MealType } from '@/storage/storageConfig';
import { mealDelete } from '@/storage/meals/mealDelete';

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
  ModalButton,
  ModalButtonsRow,
  ModalButtonText,
  ModalContainer,
  ModalTitle,
  ModalWrapper,
  Title,
} from './styles';

type RouteParams = {
  meal: MealType;
};

export function Meal() {
  const route = useRoute();
  const theme = useTheme();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const { meal } = route.params as RouteParams;

  const bgcolor = meal.isDiet
    ? theme.COLORS.GREEN_LIGHT
    : theme.COLORS.RED_LIGHT;

  function handleEditMeal() {
    navigation.navigate('editMeal', { meal });
  }

  function handleModalCancel() {
    setModalVisible(false);
  }

  async function handleDeleteMeal() {
    try {
      setModalVisible(true);
      await mealDelete(meal);
      navigation.navigate('home', undefined, { pop: true });
    } catch (error) {
      console.log(error);
      Alert.alert('Excluir Refeiçõa', 'Não foi possível excluir a refeição.');
    } finally {
      setModalVisible(false);
    }
  }

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

          <DeleteMealButton
            activeOpacity={0.6}
            onPress={() => setModalVisible(true)}
          >
            <Trash size={18} color={theme.COLORS.GRAY_100} />
            <DeleteMealText>Excluir refeição</DeleteMealText>
          </DeleteMealButton>
        </ButtonsWrapper>
      </MealContent>

      <Modal transparent visible={modalVisible} onDismiss={handleModalCancel}>
        <ModalWrapper>
          <ModalContainer>
            <ModalTitle>
              Deseja realmente excluir o registro dessa refeição?
            </ModalTitle>

            <ModalButtonsRow>
              <ModalButton activeOpacity={0.6} onPress={handleModalCancel}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
              <ModalButton
                activeOpacity={0.6}
                onPress={handleDeleteMeal}
                $emphasize
              >
                <ModalButtonText $emphasize>Sim, excluir</ModalButtonText>
              </ModalButton>
            </ModalButtonsRow>
          </ModalContainer>
        </ModalWrapper>
      </Modal>
    </Container>
  );
}
