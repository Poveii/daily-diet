import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useState } from 'react';

import { InputButton } from '@/components/InputButton';

import { mealEdit } from '@/storage/meals/mealEdit';
import { Meal } from '@/storage/storageConfig';

import { AppError } from '@/utils/AppError';

import {
  Container,
  DietGroup,
  ExpandView,
  Form,
  Input,
  InputsRowContainer,
  Label,
  SubmitButton,
  SubmitButtonText,
} from './styles';

type RouteParams = {
  meal: Meal;
};

export function EditMeal() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [time, setTime] = useState(meal.time);
  const [isDiet, setIsDiet] = useState<boolean>(meal.isDiet);

  const navigation = useNavigation();

  async function handleEditMeal() {
    if (name.trim().length === 0) {
      return Alert.alert('Nova Refeição', 'Informe um nome para a refeição.');
    } else if (date.trim().length === 0) {
      return Alert.alert('Nova Refeição', 'Informe a data para a refeição.');
    } else if (time.trim().length === 0) {
      return Alert.alert('Nova Refeição', 'Informe a hora para a refeição.');
    } else if (isDiet === null) {
      return Alert.alert(
        'Nova Refeição',
        'Informe se essa refeição está dentro da dieta ou não.',
      );
    }

    const newMeal = {
      id: meal.id,
      name,
      description,
      date,
      time,
      isDiet,
    };

    try {
      await mealEdit(newMeal);
      navigation.navigate('meal', { meal: newMeal }, { pop: true });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message);
      } else {
        Alert.alert('Editar refeição', 'Não foi possível editar a refeição.');
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <Form>
        <Label>Nome</Label>
        <Input onChangeText={setName} value={name} />

        <Label>Descrição</Label>
        <Input
          style={{ height: 120 }}
          multiline
          onChangeText={setDescription}
          value={description}
        />

        <InputsRowContainer>
          <ExpandView>
            <Label>Data</Label>
            <Input onChangeText={setDate} value={date} />
          </ExpandView>

          <ExpandView>
            <Label>Hora</Label>
            <Input onChangeText={setTime} value={time} />
          </ExpandView>
        </InputsRowContainer>

        <DietGroup>
          <Label>Está dentro da dieta?</Label>
          <InputsRowContainer style={{ gap: 8 }}>
            <InputButton
              text="Sim"
              indicatorColor="green"
              isActive={isDiet ?? false}
              onPress={() => setIsDiet(true)}
            />
            <InputButton
              text="Não"
              indicatorColor="red"
              isActive={isDiet ?? true}
              onPress={() => setIsDiet(false)}
            />
          </InputsRowContainer>
        </DietGroup>

        <SubmitButton activeOpacity={0.8} onPress={handleEditMeal}>
          <SubmitButtonText>Salvar alterações</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
