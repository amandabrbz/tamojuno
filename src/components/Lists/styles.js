import styled from "styled-components";
import mediaHelper from "styled-media-helper";

const media = mediaHelper({
  sm: 375,
  md: 768,
  lg: 1240
});

export const Container2 = styled.div`
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  width: 280px;
  height: 64px;
  color: #252aff;
  ${media.down("sm")}{
  margin: 2rem;
  }
`;

export const List = styled.ol`
  margin: 2rem;
  width:80%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  counter-reset: my-awesome-counter;
  padding-inline-start: 20px;


  li {
    color: #666;
    padding: 0 1rem;
    list-style: none;
    position: relative;
    counter-increment: my-awesome-counter;

    p {
      width:279px;
      font-size: 18px;
      margin: 0 5rem 2rem 0;
    }

    &:before {
      content: counter(my-awesome-counter) ". ";
      position: absolute;
      top: 0;
      left: -20px;
      color: #3ecf0e;
      font-size: 24px;
      font-weight: 700;
    }
  }

  ${media.down("sm")} {
    flex-direction: column;
    max-height:640px;
  }

  ${media.down("md")} {
    flex-flow: column-nowrap;
    max-height:640px;
  }


`;
