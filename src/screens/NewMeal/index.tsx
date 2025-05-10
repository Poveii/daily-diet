import {
  Container,
  DietGroup,
  ExpandView,
  Form,
  IndicatorCircle,
  Input,
  InputButton,
  InputButtonText,
  InputsRowContainer,
  Label,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export function NewMeal() {
  return (
    <Container>
      <Form>
        <Label>Nome</Label>
        <Input />

        <Label>Descrição</Label>
        <Input style={{ height: 120 }} multiline />

        <InputsRowContainer>
          <ExpandView>
            <Label>Data</Label>
            <Input />
          </ExpandView>

          <ExpandView>
            <Label>Hora</Label>
            <Input />
          </ExpandView>
        </InputsRowContainer>

        <DietGroup>
          <Label>Está dentro da dieta?</Label>
          <InputsRowContainer style={{ gap: 8 }}>
            <InputButton activeOpacity={0.8} style={{ flex: 1 }}>
              <IndicatorCircle $color="green" />
              <InputButtonText>Sim</InputButtonText>
            </InputButton>
            <InputButton activeOpacity={0.8} style={{ flex: 1 }}>
              <IndicatorCircle $color="red" />
              <InputButtonText>Não</InputButtonText>
            </InputButton>
          </InputsRowContainer>
        </DietGroup>

        <SubmitButton activeOpacity={0.8}>
          <SubmitButtonText>Cadastrar refeição</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
