import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Header = styled.header`
  background: #252aff;
  width: 100%;
  height: 63px;
  display: flex;

  ${media.down("sm")} {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
  ${media.down("md")} {
    width: 100%;
    padding: 0rem 0.7rem 0rem 0.7rem;
  }
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
