import React, { Component } from "react";
import juno from "../../assets/juno.svg";
import { CallToAction, Container, Cell } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Cell>
          <img src={juno} alt="" />
        </Cell>
        <Cell></Cell>
        <Cell>
          <CallToAction href="https://juno.com.br">Comece agora</CallToAction>
        </Cell>
      </Container>
    );
  }
}
