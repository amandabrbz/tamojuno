import React, { Component } from "react";
import { Like, Text } from "./styles";
import { Section, ContainerFluid, CallToAction } from "../globalStyles";

export default class Liked extends Component {
  render() {
    return (
      <Section>
        <ContainerFluid className="like">
          <Text className="first">
            <Like>Gostou?</Like>
            <p>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</p>
            <CallToAction href="https://juno.com.br" target="_blank">Comece agora</CallToAction>
          </Text>
          <Text className="second" />
        </ContainerFluid>
      </Section>
    );
  }
}
