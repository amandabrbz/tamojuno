import React, { Component } from "react";
import { Section, Title, Question, List, Container } from "./styles";
import {} from "../Banner/styles";

export default class Reasons extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Como a Juno funciona?</Title>
        </Container>
        <br />
        <Container>
          <List>
            <li>
              <p>
                Você se cadastra na Juno, emite cobranças e envia para seus
                clientes. É rápido e não precisa ter carteira de cobrança em
                nenhum banco.
              </p>
            </li>
            <li>
              Seu cliente recebe a cobrança da maneira que você preferir e paga.
              A Juno cuida da conciliação bancária e da segurança das suas
              transações.
            </li>
            <li>
              O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão
              Juno, pagar contas ou transferir para uma conta bancária.
            </li>
          </List>
        </Container>
      </Section>
    );
  }
}
