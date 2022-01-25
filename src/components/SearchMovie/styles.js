import styled from "styled-components";

export const AddPage = styled.div``;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export const AddContent = styled.div`
  padding: 50px 0;
  max-width: 600px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  background-color: #032541;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 1.25rem;

  &:focus {
    outline: none;
  }
`;

export const Results = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

export const ResultsItem = styled.li`
  list-style: none;
`;
