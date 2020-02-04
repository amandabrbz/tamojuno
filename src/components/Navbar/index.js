import React, { Component } from "react";
import juno from "../../assets/juno.svg";
import { CallToAction, Header, Cell } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <Cell>
          <img src={juno} alt="" />
        </Cell>
        <Cell></Cell>
        <Cell>
          <CallToAction href="https://juno.com.br">Comece agora</CallToAction>
        </Cell>
      </Header>
    );
  }
}
