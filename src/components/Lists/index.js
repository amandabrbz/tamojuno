import React, { Component } from "react";
import { Title, List, Container } from "./styles";
import { Section } from "../globalStyles";

export default class Lists extends Component {
  render() {
    return (
      <Section className="reasons">
        <Container>
          <Title>Como a Juno funciona?</Title>
        </Container>
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
              <p>
                Seu cliente recebe a cobrança da maneira que você preferir e
                paga. A Juno cuida da conciliação bancária e da segurança das
                suas transações.
              </p>
            </li>
            <li>
              <p>
                O dinheiro cai na sua conta Juno e você pode usá-lo com seu
                cartão Juno, pagar contas ou transferir para uma conta bancária.
              </p>
            </li>
          </List>
        </Container>
      </Section>
    );
  }
}
