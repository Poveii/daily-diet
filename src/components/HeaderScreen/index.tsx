import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

import { BackButton, Container, PageTitle } from './styles';

type Props = {
  iconColor?: string;
  title?: string;
  bgColor?: string;
};

export function HeaderScreen({ iconColor, title, bgColor }: Props) {
  const navigation = useNavigation();
  const theme = useTheme();

  const color = iconColor ?? theme.COLORS.GRAY_200;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container $bgColor={bgColor}>
      <BackButton activeOpacity={0.8} onPress={handleGoBack}>
        <ArrowLeft color={color} size={24} />
      </BackButton>
      {title ? <PageTitle>{title}</PageTitle> : <></>}
    </Container>
  );
}
