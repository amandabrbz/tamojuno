import React, { Component } from "react";
import juno from "../../assets/juno.svg";
import { Section, Container, CallToAction } from "../globalStyles";
import { Header, Cell } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Section className="navBar">
        <Container>
          <Header>
            <Cell>
              <img src={juno} alt="" />
            </Cell>
            <Cell></Cell>
            <Cell>
              <CallToAction as="a" href="https://juno.com.br">
                Comece agora
              </CallToAction>
            </Cell>
          </Header>
        </Container>
      </Section>
    );
  }
}
