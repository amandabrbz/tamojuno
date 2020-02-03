import React, { Component } from "react";
import { Container, Like, Container2 } from "./styles";
import cta from "../../assets/cta.png";

export default class Liked extends Component {
  render() {
    return (
      <Container>
        <Like>Gostou?</Like>
        <Container2>
          <img src={cta} alt="" />
        </Container2>
      </Container>
    );
  }
}
