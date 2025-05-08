import { Container, LoadingIndicator, Logo } from './styles';

import logoImg from '@/assets/logo.png';

export function Loading() {
  return (
    <Container>
      <Logo source={logoImg} />
      <LoadingIndicator />
    </Container>
  );
}
