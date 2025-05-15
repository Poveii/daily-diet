import { useState } from 'react';
import { randomUUID } from 'expo-crypto';
import { useNavigation } from '@react-navigation/native';

import { mealCreate } from '@/storage/meals/mealCreate';

import { InputButton } from '@/components/InputButton';

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

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDiet, setIsDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  async function handleNewMeal() {
    try {
      const newMeal = {
        id: randomUUID(),
        name,
        description,
        date,
        time,
        isDiet: Boolean(isDiet), // TODO: Adicionar uma etapa de validação do resultado do `isDiet`.
      };
      await mealCreate(newMeal);
      navigation.navigate('home');
    } catch (error) {
      console.error(error);
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

        <SubmitButton activeOpacity={0.8} onPress={handleNewMeal}>
          <SubmitButtonText>Cadastrar refeição</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
