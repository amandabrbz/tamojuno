import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Footer = styled.footer`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;

  ${media.down("sm")} {
    width: 100%;
    flex-direction: column;
    min-height: 120px;
    margin: 1rem;
  }
  ${media.down("md")} {
    width: 100%;
    flex-direction: column;
    min-height: 120px;
    margin: 1rem;
  }

  p {
    margin: 0;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;

    ${media.down("sm")} {
      margin: 0;
    }
  }
`;

export const Cell = styled.div`
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
