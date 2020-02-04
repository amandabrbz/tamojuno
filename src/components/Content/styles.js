import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${media.down("sm")} {
      flex-direction: column-reverse;
      margin: 1.5rem 0 3rem 0;
  }
`;

export const Container = styled.div`
align-items: center;
`;

export const Title = styled.h2`
  width: 377px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #252aff;
`;

export const Subtitle = styled.p`
  width: 317px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #666666;
`;
