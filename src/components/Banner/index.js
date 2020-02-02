import React, { Component, Fragment } from "react";
import { Container, Title, Subtitle, CallToAction } from "./styles";

export default class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Title>
            Profissionalize seu negócio recebendo pagamentos por boleto
          </Title>
          <Subtitle>
            Na Juno você não precisa ter conta jurídica e nem carteira de
            cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples
            assim!
          </Subtitle>
          <CallToAction>Comece agora</CallToAction>
        </Container>
      </Fragment>
    );
  }
}
