import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  return (
    <Container>
      <Text>Daily Diet</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={handleOpenStatistics}>
        <Text>Estatísticas</Text>
      </TouchableOpacity>
    </Container>
  );
}
