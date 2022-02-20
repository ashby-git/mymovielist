import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  padding: 10px 20px 10px 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  max-height: 90vh;
  overflow: scroll;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PosterWrapper = styled.div`
  margin: auto 0;
`;

export const Image = styled.img`
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
  @media (max-width: 700px) {
    margin: 0 0 20px 0;
  }
`;

export const FillerPoster = styled.div`
  width: 200px;
  height: 300px;
  background-color: #dbdada;
  border-radius: 5px;
  margin-right: 15px;
  display: block;
  color: transparent;
  @media (max-width: 700px) {
    margin: 0 0 20px 0;
  }
`;

export const MovieDetails = styled.div`
  margin: 0 0 10px 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #032541;
  font-weight: 600;
  margin: 0 0 10px 0;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const Overview = styled.p`
  font-size: 1.25rem;
  color: #032541;
  font-weight: 600;
  margin: 0;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  color: #032541;
  margin: 0 0 10px 0;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
