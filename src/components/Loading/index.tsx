import { Container, LoadingIndicator, Logo } from './styles';

import logoImg from '@/assets/logo.png';

type Props = {
  logoShown?: boolean;
};

export function Loading({ logoShown }: Props) {
  return (
    <Container>
      {logoShown ? <Logo source={logoImg} /> : <></>}
      <LoadingIndicator />
    </Container>
  );
}
