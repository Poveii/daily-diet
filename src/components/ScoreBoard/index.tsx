import { TouchableOpacityProps } from 'react-native';

import { Container, ScoreBoardIcon, ScoreNumber, ScoreText } from './styles';

type Props = TouchableOpacityProps & {
  percentage: string;
  totalResult: boolean;
};

export function ScoreBoard({ percentage, totalResult, ...rest }: Props) {
  return (
    <Container $percentageStat={totalResult} activeOpacity={0.8} {...rest}>
      <ScoreNumber>{percentage}%</ScoreNumber>
      <ScoreText>das refeições dentro da dieta</ScoreText>
      <ScoreBoardIcon $percentageStat={totalResult} />
    </Container>
  );
}
