import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  margin-top: 12px;
  margin-left: 16px;
`;

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_SM};
  `}
`;
