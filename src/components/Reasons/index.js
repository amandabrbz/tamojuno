import React, { Component } from "react";
import { Container, Question, List } from "./styles";

export default class Reasons extends Component {
  render() {
    return (
      <Container>
        <Question>Como a Juno funciona?</Question>
        <List>
          <li>
            <p>
              Você se cadastra na Juno, emite cobranças e envia para seus
              clientes. É rápido e não precisa ter carteira de cobrança em
              nenhum banco.
            </p>
          </li>
          <li>
            Seu cliente recebe a cobrança da maneira que você preferir e paga. A
            Juno cuida da conciliação bancária e da segurança das suas
            transações.
          </li>
          <li>
            O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão
            Juno, pagar contas ou transferir para uma conta bancária.
          </li>
        </List>
      </Container>
    );
  }
}
