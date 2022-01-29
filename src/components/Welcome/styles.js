import styled from "styled-components";
import { Link } from "react-router-dom";

export const WelcomeContainer = styled.section`
  max-width: max-content;
  display: grid;
  margin: 0 auto;
  padding: 80px 0 0 0;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 2rem;
`;

export const GetStartedContainer = styled(Link)`
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
`;

export const Subheading = styled.h2`
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
`;

export const Textbox = styled.p`
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
`;
