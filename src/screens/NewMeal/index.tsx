import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export function NewMeal() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Text>New Meal</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={handleGoBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </Container>
  );
}
