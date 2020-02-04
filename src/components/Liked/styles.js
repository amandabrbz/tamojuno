import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Section = styled.section`
  width: 100%;
  height: 450px;
  background-color: #00155f;
  display: flex;
  bottom: 0;

  ${media.down("sm")} {
    display: table;
    width: 100%;
    height: 331px;
  }
  ${media.down("md")} {
    width: 100%;
    display: table;
    max-height: 331px;
  }
`;

export const Text = styled.div`
  flex: 1;
  text-align: center;
  ${media.down("sm")} {
    height: 331px;
  }
`;

export const Like = styled.h3`
  font-size: 16px;
  color: #ffffff;
  text-align: left;
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
