import styled, { css } from 'styled-components/native';

type InputButtonProps = {
  isActive?: boolean;
  indicatorColor: 'green' | 'red';
};

export const Container = styled.TouchableOpacity<InputButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  ${({ theme, isActive, indicatorColor }) => {
    switch (isActive) {
      case null:
        break;
      case true:
        return (
          indicatorColor === 'green' &&
          css`
            background-color: ${theme.COLORS.GREEN_LIGHT};
            border: 1px ${theme.COLORS.GREEN_DARK};
          `
        );
      case false:
        return (
          indicatorColor === 'red' &&
          css`
            background-color: ${theme.COLORS.RED_LIGHT};
            border: 1px ${theme.COLORS.RED_DARK};
          `
        );
      default:
        break;
    }
  }}
`;

export const IndicatorCircle = styled.View<{ $color: 'green' | 'red' }>`
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background-color: ${({ $color, theme }) =>
    ($color === 'green' && theme.COLORS.GREEN_DARK) ||
    ($color === 'red' && theme.COLORS.RED_DARK)};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font: ${theme.TEXT_STYLES.TITLE_XS};
  `}
`;
