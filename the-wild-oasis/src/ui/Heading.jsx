import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 30rem;
      font-weight: 1000;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 20rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
