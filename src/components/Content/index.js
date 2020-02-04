import React, { Component } from "react";
import { Section, Title, Paragraph, Container } from "./styles";
import cobrancas from "../../assets/cobrancas.png";

export default class Content extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Emita cobranças recorrentes</Title>
          <Paragraph>
            Com a <strong>Juno</strong>, você pode emitir cobranças recorrentes com lembretes que
            ajudam a diminuir a inadimplência dos seus clientes.
          </Paragraph>
        </Container>
        <Container>
          <img src={cobrancas} alt="Plataforma Juno de emissão de cobrança" />
        </Container>
      </Section>
    );
  }
}
