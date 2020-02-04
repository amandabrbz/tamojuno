import styled from "styled-components";

export const Container = styled.header`
  @media only screen and (max-width: 300px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem .7rem 0rem .7rem; 
  }
  background: #252aff;
  width: 100%;
  height: 63px;
  display: flex;
`;

export const Cell = styled.div`
  flex: 1;
  align-self: center;
  text-align: center;
`;

export const CallToAction = styled.button`
  background: #3ecf0e;
  border-radius: 4px;
  border: 1px solid #3ecf0e;
  height: 40px;
  width: 150px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  align-items: center;
`;
