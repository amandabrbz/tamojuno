import styled from "styled-components";
import banner from "../../assets/banner.png";

export const Content = styled.div`
  background-image: url(${banner}) norepeat;
  background-color: #cccccc;
  position: absolute;
  width: 100%;
  height: 537px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  position: absolute;
  width: 476px;
  height: 144px;
  left: 20%;
  top: 20%;
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  color: #fff;
  position: absolute;
  width: 523px;
  height: 75px;
  left: 20%;
  top: 50%;
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
  left: 20%;
  right: 72.4%;
  top: 72.5%;
`;
