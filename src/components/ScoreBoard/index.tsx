import { TouchableOpacityProps } from 'react-native';

import { Container, ScoreBoardIcon, ScoreNumber, ScoreText } from './styles';

export function ScoreBoard(props: TouchableOpacityProps) {
  return (
    <Container activeOpacity={0.8} {...props}>
      <ScoreNumber>90,86%</ScoreNumber>
      <ScoreText>das refeições dentro da dieta</ScoreText>
      <ScoreBoardIcon />
    </Container>
  );
}
