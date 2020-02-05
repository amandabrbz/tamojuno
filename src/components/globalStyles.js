import styled from "styled-components";
import mediaHelper from "styled-media-helper";

import banner from "../assets/banner.png";

const media = mediaHelper({
  sm: 370,
  md: 768,
  lg: 1240
});

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: #f1f5fb;

  ${media.down("sm")} {
    flex-direction: column;
  }

  &.navBar {
    background-color: #252aff;
  }

  &.banner {
    background-image: url(${banner});
    background-position: top center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${media.down("sm")} {
      background-position: 70% 0;
    }
  }

  &.reasons {
    min-height: 300px;
    background: #F1F5FB;
  }

  &.Content{
    background-color:#fff;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  margin: 0 auto;
`;

export const ContainerFluid = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  &.like {
    ${media.down("sm")} {
      flex-flow: column wrap-reverse;
    }
  }
`;

export const CallToAction = styled.a`
  background: #3ecf0e;
  border-radius: 4px;
  border: 1px solid #3ecf0e;
  height: 40px;
  width: 150px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
