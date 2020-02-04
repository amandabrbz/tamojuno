import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Container = styled.footer`
  width: 100%;
  height: 90px;
  background: #252aff;
  display: flex;
  bottom: 0;

  ${media.down("sm")} {
    width: 100%;
    display: table;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  }
  ${media.down("md")} {
    width: 100%;
    display: table;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  }
`;

export const Text = styled.div`
  width: 100%;
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
