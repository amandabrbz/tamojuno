import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Main = styled.main`
  height: 537px;
  top: 63px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: space-between;
  align-items: left;
  flex: 1;

  ${media.down("sm")} {
    padding: 0rem;
    margin: 0px;
  }
  ${media.down("md")} {
    margin: 2rem;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  width: 476px;
  margin: 0px;
  font-weight: 700;

  ${media.down("sm")} {
    width: 311px;
    margin: 0px;
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
    margin: 1rem 0 2rem 0;
  }
`;
