import React, { Component } from "react";
import { Section, Title, Subtitle, Container } from "./styles";
import cobrancas from "../../assets/cobrancas.png";

export default class Content extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Emita cobranças recorrentes</Title>
          <Subtitle>
            Com a Juno, você pode emitir cobranças recorrentes com lembretes que
            ajudam a diminuir a inadimplência dos seus clientes.
          </Subtitle>
        </Container>
        <Container>
          <img src={cobrancas} alt="" />
        </Container>
      </Section>
    );
  }
}
