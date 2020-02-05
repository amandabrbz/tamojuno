import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Header = styled.header`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;

  ${media.down("sm")} {
    padding: 0 2rem;
    width: 100%;
  }
  ${media.down("md")} {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const Cell = styled.div`
  align-self: center;
  text-align: center;

`;
