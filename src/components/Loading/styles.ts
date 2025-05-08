import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 'large',
}))`
  margin-top: 4px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;
