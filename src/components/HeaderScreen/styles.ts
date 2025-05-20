import styled, { css } from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)<{ $bgColor: string | undefined }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-top: 12px;
  ${({ $bgColor }) =>
    $bgColor
      ? css`
          background-color: ${$bgColor};
        `
      : ``}
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  margin-left: 16px;
  margin-right: auto;
`;

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_SM};
  `}
  text-align: center;
  margin-left: -48px;
  margin-right: auto;
`;
