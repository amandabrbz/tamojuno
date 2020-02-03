import React, { Component } from "react";
import { Container, Text } from "./styles";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Text>
          <p>Juno.com.br</p>
        </Text>
        <Text>
          <p>
            2020 Juno. Todos os direitos reservados.
            <br />
            Juno é uma plataforma de BoletoBancário.com
          </p>
        </Text>
        <Text>
          <p>#tamojuno</p>
        </Text>
      </Container>
    );
  }
}
