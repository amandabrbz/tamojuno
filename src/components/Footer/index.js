import React, { Component } from "react";

import { Section, Container } from "../globalStyles";
import { Footer, Cell } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Section className="navBar">
        <Container>
          <Footer>
            <Cell>
              <p>Juno.com.br</p>
            </Cell>
            <Cell>
              <p>2020 Juno. Todos os direitos reservados.</p>
              <p>Juno é uma plataforma de BoletoBancário.com</p>
            </Cell>
            <Cell>
              <p>#tamojuno</p>
            </Cell>
          </Footer>
        </Container>
      </Section>
    );
  }
}
