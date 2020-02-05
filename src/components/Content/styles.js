import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;

  ${media.down("sm")} {
    width: 100%;
    flex-direction: column-reverse;
    min-height: 120px;
    margin: 1rem;
  }
  ${media.down("md")} {
    width: 100%;
    flex-direction: column-reverse;
    min-height: 120px;
    margin: 1rem;
  }

  p {
    width: 287px;
    color: #666;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.4px;
    ${media.down("sm")} {
      margin: 0;
      width: 275px;
      text-align: left;
    }
  }

  img {
    width:100%;
  }
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.down("sm")} {
    margin: 2rem;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
  }
  ${media.down("md")} {
    margin: 2rem;
    text-align: left;
    margin: 2rem;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Title = styled.h3`
  text-align: left;
  font-size: 32px;
  color: #252aff;
  text-align: left;
  line-height: 32px;
  width: 295px;
  margin: 0px;
  font-weight: 700;
  margin: 1px;

  ${media.down("sm")} {
    padding: 0 0 1rem 0;
  }
`;
