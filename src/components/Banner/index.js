import React, { Component } from "react";
import { Main, Title, Paragraph, CallToAction, Section} from "./styles";

export default class Banner extends Component {
  render() {
    return (
      <Main>
        <Section>
          <Title>Emita cobranças recorrentes</Title>
          <Paragraph>
          Na <strong>Juno</strong> você não precisa ter conta jurídica e nem carteira de cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples assim!
          </Paragraph>
          <CallToAction>Comece agora</CallToAction>
        </Section>
      </Main>
    );
  }
}
