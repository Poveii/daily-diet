import { TouchableOpacityProps } from 'react-native';

import { Container, IndicatorCircle, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  isActive?: boolean;
  indicatorColor: 'green' | 'red';
};

export function InputButton({
  text,
  isActive,
  indicatorColor,
  ...rest
}: Props) {
  return (
    <Container
      activeOpacity={0.8}
      style={{ flex: 1 }}
      isActive={isActive}
      indicatorColor={indicatorColor}
      {...rest}
    >
      <IndicatorCircle $color={indicatorColor} />
      <Title>{text}</Title>
    </Container>
  );
}
