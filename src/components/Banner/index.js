import React, { Component } from "react";
import  { Section, Container } from '../globalStyles';
import { Main, Title, Paragraph, CallToAction } from "./styles";

export default class Banner extends Component {
  render() {
    return (
      <Section className="banner">
        <Container>
          <Main>
              <Title>Profissionalize seu negócio recebendo pagamentos por boleto</Title>
              <Paragraph>
                Na <strong>Juno</strong> você não precisa ter conta jurídica e nem
                carteira de cobrança junto ao banco para emitir boletos. Basta seu
                CPF. <strong>Simples assim!</strong>
              </Paragraph>
              <CallToAction>Comece agora</CallToAction>
          </Main>
        </Container>
      </Section>
    );
  }
}
