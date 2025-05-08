import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Statistics() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Text>Statistics</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={handleGoBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </Container>
  );
}
