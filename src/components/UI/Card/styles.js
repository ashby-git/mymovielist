import styled from "styled-components";

const handleBgColorType = (bgColor) => {
  switch (bgColor) {
    case "lightPurple":
      return "#f1e1fc";
    case "purple":
      return "#9f5ccc";
    case "darkPurple":
      return "#38015c";
    default:
      return "white";
  }
};

export const CardContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${({ bgColor }) => handleBgColorType(bgColor)};
`;
