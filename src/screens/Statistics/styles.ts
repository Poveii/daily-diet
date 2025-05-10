import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: 32px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ScoreContainer = styled.View`
  align-items: center;
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

export const StatsContent = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 24px;
  padding-inline: 28px;
  margin-top: 36px;
`;

export const StatsText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_XS};
  `}
  margin-top: 32px;
`;

export const StatsPads = styled.View`
  width: 100%;
  gap: 12px;
  margin-top: 24px;
`;

export const PadContainer = styled.View<{ $bgColor?: string }>`
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  ${({ $bgColor, theme }) => css`
    background-color: ${$bgColor || theme.COLORS.GRAY_600};
    flex: ${$bgColor ? 1 : 'auto'};
  `}
`;

export const PadRowContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const PadTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_MD};
  `}
`;

export const PadDescription = styled.Text`
  width: 100%;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.BODY_SM};
  `}
`;
