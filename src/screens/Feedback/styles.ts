import styled, { css } from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FeedbackWrapper = styled.View`
  gap: 8;
  margin-bottom: 40px;
`;

export const Title = styled.Text<{ $color: 'green' | 'red' }>`
  ${({ theme, $color }) => css`
    color: ${$color === 'green'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font: ${theme.TEXT_STYLES.TITLE_MD};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_MD};
  `}
  text-align: center;
  width: 350px;
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const BackButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font: ${theme.TEXT_STYLES.BODY_SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
