import React, { Component } from "react";
import { Section, Like, Text, CallToAction, Cell } from "./styles";
import cta from "../../assets/cta.png";

export default class Liked extends Component {
  render() {
    return (
      <Section>
        <Text>
          <Like>Gostou?</Like>
          <p>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</p>
          <Cell>
            <CallToAction href="https://juno.com.br">Comece agora</CallToAction>
          </Cell>
        </Text>
        <Text></Text>
        <Text>
          <img src={cta} alt="" />
        </Text>
      </Section>
    );
  }
}
