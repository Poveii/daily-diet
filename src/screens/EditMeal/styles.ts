import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Form = styled.View`
  flex: 1;
  padding: 16px 24px 0px 24px;
  margin-top: 68px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font: ${theme.TEXT_STYLES.TITLE_XS};
  `}
  margin-top: 24px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.BODY_MD};
    border: 1px ${theme.COLORS.GRAY_500};
  `}
  border-radius: 6px;
  padding: 14px;
  margin-top: 4px;
  vertical-align: top;
`;

export const InputsRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const DietGroup = styled.View`
  gap: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  padding: 16px 24px;
  margin-top: auto;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const SubmitButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font: ${theme.TEXT_STYLES.TITLE_XS};
  `}
`;

export const ExpandView = styled.View`
  flex: 1;
`;
