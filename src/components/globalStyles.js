import styled from "styled-components";
import mediaHelper from "styled-media-helper";

import banner from "../assets/banner.png";

const media = mediaHelper({
  sm: 375,
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
  }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    margin: 0 auto;
`;