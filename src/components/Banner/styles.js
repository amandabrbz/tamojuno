import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Main = styled.main`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 537px;
  top: 63px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: space-between;
  align-items: left;
  flex: 1;

  ${media.down("sm")} {
    background-position: 80%;
    width: 100%;
  }
  ${media.down("md")} {
    background-position: 65%;
  }
`;

export const Section = styled.div`
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  width: 476px;
  ${media.down("sm")} {
    width: 311px;
  }
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #fff;
  width: 523px;
  ${media.down("sm")} {
    width: 311px;
  }
`;

export const CallToAction = styled.button`
  width: 150px;
  height: 34.58px;
  background: #3ecf0e;
  border-radius: 4px;
  border: 1px solid #3ecf0e;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  align-items: center;
`;
