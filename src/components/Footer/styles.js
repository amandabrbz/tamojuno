import styled from "styled-components";

export const Container = styled.footer`
  @media only screen and (max-width: 300px) {
    display: table;
    padding: 0.5rem .7rem 0.5rem .7rem; 
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: table;
    padding: 0.5rem .7rem 0.5rem .7rem; 
  }
  width: 100%;
  height: 90px;
  background: #252aff;
  display: flex;
  margin: 0 auto;
`;

export const Text = styled.div`
  flex: 1;
  align-self: center;
  text-align: center;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;
