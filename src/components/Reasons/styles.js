import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Section = styled.section`
  background-color: #f1f5fb;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  flex: 1;
  ${media.down("sm")} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  width: 280px;
  height: 64px;
  color: #666666;
  margin-left: 14%;
`;

export const List = styled.ol`
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #666666;
  margin-left: 13%;
  width:80%;
  display:flex;
  flex-direction: row;
  .li {
    color: #FC8B24;
    font-weight:bold;
  }
`;
