import styled from "styled-components";

export const ProfileContentContainer = styled.div`
  padding: 80px 0 0 0;
`;

export const MovieListSection = styled.div`
  padding: 30px 10px;
`;

export const SectionContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h1`
  color: #032541;
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  width: 100%;
  border-bottom: 3px solid #032541;

  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;

export const CountPill = styled.span`
  display: block;
  background-color: #21d07a;
  padding: 5px 15px;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 999px;
  color: #032541;
  min-width: 80px;
  margin: 35px 0 0 8px;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const NoMovies = styled.h2`
  color: #c4c4c4;
  font-size: 3rem;
  text-align: center;
`;
