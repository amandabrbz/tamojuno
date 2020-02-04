import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 320,
  md: 768,
  lg: 1240
});

export const Container = styled.footer`
  width: 100%;
  height: 90px;
  background: #252aff;
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  ${media.down("sm")} {
    display: table;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    width: 100%;
  }
  ${media.down("md")} {
    width: 100%;
    display: table;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  }
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
