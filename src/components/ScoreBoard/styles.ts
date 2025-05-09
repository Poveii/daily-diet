import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-top: 32px;
`;

export const ScoreNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_LG}px;
    line-height: ${theme.LINE_HEIGHT.TITLE_LG}px;
  `}
`;

export const ScoreText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_SM}px;
    line-height: ${theme.LINE_HEIGHT.BODY_SM}px;
  `}
  margin-top: 2px;
`;

export const ScoreBoardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
