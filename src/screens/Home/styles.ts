import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus } from 'phosphor-react-native';

import logoImg from '@/assets/logo.png';
import photoImg from '@/assets/photo.png';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 26px 24px 0 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs(() => ({
  source: logoImg,
}))`
  width: 82px;
  height: 37px;
`;

export const Photo = styled.Image.attrs(() => ({
  source: photoImg,
}))`
  width: 40px;
  height: 40px;
  border: 2px ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 99px;
`;

export const MealsContainer = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_MD};
  `}
`;

export const NewMealButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  padding-block: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  margin-top: 8px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE,
}))``;

export const NewMealText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font: ${theme.TEXT_STYLES.BODY_SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 14px 16px 12px;
  border: 1px ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 8px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_XS};
  `}
`;

export const Divider = styled.View`
  height: 14px;
  border: 0.5px ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealTitle = styled.Text`
  max-width: 190px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.BODY_MD};
  `}
`;

export const DoneIndicator = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 99px;
  margin-left: auto;
`;

export const MealDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_SM};
  `}
  margin-bottom: -32px;
`;

export const EmptyMealsListText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font: ${theme.TEXT_STYLES.BODY_SM};
  `}
  padding-inline: 48px;
  text-align: center;
  opacity: 0.6;
`;
