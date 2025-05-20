import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity<{ $percentageStat: boolean }>`
  align-items: center;
  padding: 20px 16px;
  background-color: ${({ $percentageStat, theme }) =>
    $percentageStat ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-top: 32px;
`;

export const ScoreNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_LG};
  `}
`;

export const ScoreText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.BODY_SM};
  `}
  margin-top: 2px;
`;

export const ScoreBoardIcon = styled(ArrowUpRight).attrs<{
  $percentageStat: boolean;
}>(({ theme, $percentageStat }) => ({
  size: 24,
  color: $percentageStat ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
