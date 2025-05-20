import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';
import { Alert } from 'react-native';
import { useState } from 'react';

import { mealCreate } from '@/storage/meals/mealCreate';

import { InputButton } from '@/components/InputButton';

import { AppError } from '@/utils/AppError';

import {
  Container,
  DietGroup,
  ExpandView,
  Form,
  Input,
  InputsGroup,
  InputsRowContainer,
  Label,
  MaskedInput,
  ScrollContainer,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDiet, setIsDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  async function handleNewMeal() {
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
      id: randomUUID(),
      name,
      description,
      date,
      time,
      isDiet,
    };

    try {
      await mealCreate(newMeal);

      const feedbackType = isDiet ? 'positive' : 'negative';
      navigation.navigate('feedback', { type: feedbackType });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message);
      } else {
        Alert.alert(
          'Nova refeição',
          'Não foi possível criar uma nova refeição.',
        );
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <ScrollContainer>
        <Form>
          <InputsGroup>
            <Label>Nome</Label>
            <Input
              onChangeText={setName}
              value={name}
              placeholder="Ex.: Suco verde, crepioca..."
            />

            <Label>Descrição</Label>
            <Input
              style={{ height: 120 }}
              multiline
              onChangeText={setDescription}
              value={description}
              placeholder="Escreva sobre o prato que você experimentou..."
            />

            <InputsRowContainer>
              <ExpandView>
                <Label>Data</Label>
                <MaskedInput
                  mask="99/99/9999"
                  onChangeText={setDate}
                  value={date}
                  placeholder="Ex.: 20/05/2025"
                />
              </ExpandView>

              <ExpandView>
                <Label>Hora</Label>
                <MaskedInput
                  mask="99:99"
                  onChangeText={setTime}
                  value={time}
                  placeholder="Ex.: 12:00"
                />
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
          </InputsGroup>

          <SubmitButton activeOpacity={0.8} onPress={handleNewMeal}>
            <SubmitButtonText>Cadastrar refeição</SubmitButtonText>
          </SubmitButton>
        </Form>
      </ScrollContainer>
    </Container>
  );
}
