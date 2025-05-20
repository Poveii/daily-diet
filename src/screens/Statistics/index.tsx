import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Alert } from 'react-native';

import { getMealsStatistics } from '@/storage/meals/mealsStatistics';
import { MealsStatistics } from '@/storage/storageConfig';

import { HeaderScreen } from '@/components/HeaderScreen';

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
  const [statistics, setStatistics] = useState<MealsStatistics>(
    {} as MealsStatistics,
  );

  const theme = useTheme();
  const navigation = useNavigation();

  async function fetchStatistics() {
    try {
      const computedStatistics = await getMealsStatistics();
      setStatistics(computedStatistics);
    } catch (error) {
      console.error(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, []),
  );

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderScreen
          iconColor={
            statistics.totalResult
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.RED_DARK
          }
        />
      ),
    });
  }, [navigation, statistics, theme]);

  return (
    <Container $percentageStat={statistics.totalResult}>
      <ScoreContainer>
        <ScoreNumber>{statistics.percentage}%</ScoreNumber>
        <ScoreText>das refeições dentro da dieta</ScoreText>
      </ScoreContainer>

      <StatsContent>
        <StatsText>Estatísticas gerais</StatsText>

        <StatsPads>
          <PadContainer>
            <PadTitle>{statistics.bestInARowMealsInDiet}</PadTitle>
            <PadDescription>
              melhor sequência de pratos dentro da dieta
            </PadDescription>
          </PadContainer>

          <PadContainer>
            <PadTitle>{statistics.mealsRegistered}</PadTitle>
            <PadDescription>refeições registradas</PadDescription>
          </PadContainer>

          <PadRowContainer>
            <PadContainer $bgColor={theme.COLORS.GREEN_LIGHT}>
              <PadTitle>{statistics.mealsInDiet}</PadTitle>
              <PadDescription>refeições dentro da dieta</PadDescription>
            </PadContainer>

            <PadContainer $bgColor={theme.COLORS.RED_LIGHT}>
              <PadTitle>{statistics.mealsNotInDiet}</PadTitle>
              <PadDescription>refeições fora da dieta</PadDescription>
            </PadContainer>
          </PadRowContainer>
        </StatsPads>
      </StatsContent>
    </Container>
  );
}
