import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border: 3px solid #21d07a;
  }
`;

export const MovieCardImage = styled.img`
  width: 100%;
  display: block;
`;
