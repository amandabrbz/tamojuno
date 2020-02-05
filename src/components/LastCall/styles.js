import styled from "styled-components";
import mediaHelper from "styled-media-helper";
import cta from "../../assets/cta.png";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Text = styled.div`
  width: 50%;
  height: 450px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin: 0;

  ${media.down("sm")} {
    flex: 1;
    width: 100%;
    min-height: 331px;
    margin: 0px;
  }

  &.first {
    box-sizing: border-box;
    background-color: #00155f;
    padding: 1rem;
    align-items: flex-end;
    ${media.down("sm")} {
      padding: 2rem;
    }
    ${media.down("md")} {
      padding: 3rem;
    }
  }

  &.second {
    background-image: url(${cta});

    ${media.down("sm")} {
      background-position: center center;
    }
    ${media.down("md")} {
      background-position: center center;
    }
  }

  p {
    width: 287px;
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.4px;
  }
`;

export const Like = styled.h3`
  font-size: 32px;
  color: #ffffff;
  text-align: left;
  line-height: 32px;
  color: #fff;
  width: 476px;
  margin: 0px;
  font-weight: 700;
  margin: 0px;

  ${media.down("sm")} {
    width: 311px;
    margin: 0px;
  }
`;

export const Group = styled.div`
  width: 75%;
  align-items: center;
  ${media.down("sm")} {
    width: 320px;
    margin: 0px;
  }
`;
