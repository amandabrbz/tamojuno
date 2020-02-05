import React, { Component } from "react";

import { Section, Container } from "../globalStyles";
import { Div, Cell, Title } from "./styles";
import cobrancas from "../../assets/cobrancas.png";

export default class Content extends Component {
  render() {
    return (
      <Section className="Content">
        <Container>
          <Div>
            <Cell>
              <Title>Emita cobranças recorrentes</Title>
              <p>
                Com a Juno, você pode emitir cobranças recorrentes com lembretes
                que ajudam a diminuir a inadimplência dos seus clientes.
              </p>
            </Cell>
            <Cell>
              <img src={cobrancas} alt="" />
            </Cell>
          </Div>
        </Container>
      </Section>
    );
  }
}
