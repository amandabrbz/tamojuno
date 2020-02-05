import React, { Component } from "react";
import { Title, List, Container2 } from "./styles";
import { Section, Container } from "../globalStyles";

export default class Lists extends Component {
  render() {
    return (
      <Section className="reasons">
        <Container>
        <Container2>
          <Title>Como a Juno funciona?</Title>
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
        </Container2>
        </Container>
      </Section>
    );
  }
}
