import styled, { css } from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)<{ $bgcolor: string }>`
  flex: 1;
  background-color: ${({ $bgcolor }) => $bgcolor};
`;

export const MealContent = styled.View`
  flex: 1;
  padding: 40px 24px 18px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: 72px;
`;

export const MealWrapper = styled.View`
  gap: 24px;
  margin-bottom: auto;
`;

export const MealInfo = styled.View`
  gap: 8px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size: 20px;
  line-height: 26px;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.BODY_MD};
  `}
`;

export const DateAndTimeWrapper = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_XS};
  `}
`;

export const DateAndTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.BODY_MD};
  `}
`;

export const DietTag = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
  margin-right: auto;
`;

export const DietTagIndicator = styled.View<{ $color: 'green' | 'red' }>`
  width: 8px;
  height: 8px;
  background-color: ${({ $color, theme }) =>
    $color === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 99px;
`;

export const DietTagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_SM};
  `}
`;

export const ButtonsWrapper = styled.View`
  gap: 8px;
`;

const MealButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  gap: 12px;
  border-radius: 6px;
`;

export const EditMealButton = styled(MealButton)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const EditMealText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font: ${theme.TEXT_STYLES.BODY_SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 2px;
`;

export const DeleteMealButton = styled(MealButton)`
  border: 1px ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DeleteMealText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 2px;
`;

export const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`;

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.TITLE_SM};
  `}
  width: 280px;
  text-align: center;
`;

export const ModalButtonsRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ModalButton = styled.TouchableOpacity<{ $emphasize?: boolean }>`
  ${({ $emphasize, theme }) =>
    $emphasize
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
          border: none;
        `
      : css`
          background-color: transparent;
          border: 1px ${theme.COLORS.GRAY_100};
        `}
  font: ${({ theme }) => theme.TEXT_STYLES.TITLE_SM};
  flex: 1;
  padding: 16px 24px;
  border-radius: 6px;
`;

export const ModalButtonText = styled.Text<{ $emphasize?: boolean }>`
  ${({ $emphasize, theme }) =>
    $emphasize
      ? css`
          color: ${theme.COLORS.WHITE};
        `
      : css`
          color: ${theme.COLORS.GRAY_100};
        `}
  font: ${({ theme }) => theme.TEXT_STYLES.BODY_SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;
