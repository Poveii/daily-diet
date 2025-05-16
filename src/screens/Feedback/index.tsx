import { useNavigation, useRoute } from '@react-navigation/native';

import {
  BackButton,
  BackButtonText,
  BoldText,
  Container,
  FeedbackWrapper,
  Illustration,
  Subtitle,
  Title,
} from './styles';

type RouteParams = {
  type: 'positive' | 'negative';
};

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { type } = route.params as RouteParams;

  const feedbackData = {
    positive: {
      title: 'Continue assim!',
      subtitle: {
        first: 'Você continua ',
        bold: 'dentro da dieta.',
        last: ' Muito bem!',
      },
      image: require('@/assets/positive.png'),
    },
    negative: {
      title: 'Que pena!',
      subtitle: {
        first: 'Você ',
        bold: 'saiu da dieta',
        last: ' dessa vez, mas continue se esforçando e não desista!',
      },
      image: require('@/assets/negative.png'),
    },
  };

  function handleBackHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <FeedbackWrapper>
        <Title $color={type === 'positive' ? 'green' : 'red'}>
          {feedbackData[type].title}
        </Title>
        <Subtitle>
          {feedbackData[type].subtitle.first}
          <BoldText>{feedbackData[type].subtitle.bold}</BoldText>
          {feedbackData[type].subtitle.last}
        </Subtitle>
      </FeedbackWrapper>

      <Illustration source={feedbackData[type].image} />

      <BackButton activeOpacity={0.6} onPress={handleBackHome}>
        <BackButtonText>Ir para a página inicial</BackButtonText>
      </BackButton>
    </Container>
  );
}
