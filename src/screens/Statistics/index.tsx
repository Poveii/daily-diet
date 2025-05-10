import { useTheme } from 'styled-components/native';

import {
  Container,
  PadContainer,
  PadDescription,
  PadRowContainer,
  PadTitle,
  ScoreContainer,
  ScoreNumber,
  ScoreText,
  StatsContent,
  StatsPads,
  StatsText,
} from './styles';

export function Statistics() {
  const theme = useTheme();

  return (
    <Container>
      <ScoreContainer>
        <ScoreNumber>90,86%</ScoreNumber>
        <ScoreText>das refeições dentro da dieta</ScoreText>
      </ScoreContainer>

      <StatsContent>
        <StatsText>Estatísticas gerais</StatsText>

        <StatsPads>
          <PadContainer>
            <PadTitle>22</PadTitle>
            <PadDescription>
              melhor sequência de pratos dentro da dieta
            </PadDescription>
          </PadContainer>

          <PadContainer>
            <PadTitle>109</PadTitle>
            <PadDescription>refeições registradas</PadDescription>
          </PadContainer>

          <PadRowContainer>
            <PadContainer $bgColor={theme.COLORS.GREEN_LIGHT}>
              <PadTitle>99</PadTitle>
              <PadDescription>refeições dentro da dieta</PadDescription>
            </PadContainer>

            <PadContainer $bgColor={theme.COLORS.RED_LIGHT}>
              <PadTitle>10</PadTitle>
              <PadDescription>refeições fora da dieta</PadDescription>
            </PadContainer>
          </PadRowContainer>
        </StatsPads>
      </StatsContent>
    </Container>
  );
}
