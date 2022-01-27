import styled from "styled-components";

export const ResultCardContainer = styled.div`
  display: flex;
  /* margin-bottom: 20px; */
`;

export const PosterWrapper = styled.div``;

export const Image = styled.img`
  width: 75px;
  height: 113px;
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
`;

export const FillerPoster = styled.div`
  width: 75px;
  height: 113px;
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #032541;
  font-weight: 600;
  margin: 0;
`;

export const Header = styled.div``;

export const ReleaseDate = styled.h4`
  font-size: 1.25rem;
  font-weight: 300;
  color: #032541;
  margin: 0;
`;

export const Controls = styled.div``;

export const Btn = styled.button`
  margin-right: 10px;

  padding: 10px 15px;
  background-color: #21d07a;
  color: #032541;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;

  &:hover {
    background-color: #1aa762;
    opacity: 1;
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
