import styled from "styled-components";
import banner from "../../assets/banner.png";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Main = styled.main`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  height: 537px;
  top: 63px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex: 1;

  ${media.down("sm")} {
    background-position: 80%;
  }
  ${media.down("md")} {
    background-position: 65%;
  }
`;

export const Section = styled.div`
align-items: center;
margin-left:14%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  width: 476px;
`;

export const Paragraph = styled.p`
  width: 317px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #fff;
  width: 523px;
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
`;
