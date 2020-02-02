import React, { Component } from "react";
import juno from "../../assets/juno.svg";
import { CallToAction, Container } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <img src={juno} alt="" />
        <CallToAction href="https://juno.com.br">Comece agora</CallToAction>
      </Container>
    );
  }
}
