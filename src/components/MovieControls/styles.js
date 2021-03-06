import styled from "styled-components";
import { MovieCardContainer } from "../MovieCard/styles";

export const InnerCardControls = styled.div`
  display: inline;
  background-color: red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 3px;
  opacity: 0;
  transition: all 0.3s ease;
  width: max-content;

  ${MovieCardContainer}:hover & {
    opacity: 1;
  }
`;

export const ControlButton = styled.button`
  color: #fefefe;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;
  font-size: 1.25rem;
  padding: 5px;
  margin: 0;

  &:hover {
    color: #21d07a;
    cursor: pointer;
  }
`;
