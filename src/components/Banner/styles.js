import styled from "styled-components";
import banner from "../../assets/banner.png";

export const Content = styled.main`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 537px;
  display: flex;
  @media only screen and (max-width: 320px) {
    width: 100%;
    background-position: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem 0.7rem 0rem 0.7rem;
    background-position: 65%;
  }
`;

export const Column = styled.section`

`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  position: absolute;
  width: 476px;
  height: 144px;
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  color: #fff;
  position: absolute;
  width: 523px;
  height: 75px;
`;

export const CallToAction = styled.button`
  background: #3ecf0e;
  border-radius: 4px;
  border: 1px solid #3ecf0e;
  height: 34.58px;
  width: 150px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  align-items: center;
  position: absolute;
`;
