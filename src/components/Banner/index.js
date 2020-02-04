import React, { Component } from "react";
import { Content, Title, Subtitle, CallToAction, Column } from "./styles";

export default class Banner extends Component {
  render() {
    return (
      <Content>
        <Column>
          <Title>
            Profissionalize seu negócio recebendo pagamentos por boleto
          </Title>
        </Column>
        <Column>
          <Subtitle>
            Na Juno você não precisa ter conta jurídica e nem carteira de
            cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples
            assim!
          </Subtitle>
          <CallToAction>Comece agora</CallToAction>
        </Column>
      </Content>
    );
  }
}
