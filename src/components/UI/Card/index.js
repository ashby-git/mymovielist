import React from "react";
import * as S from "./styles";

const Card = (props) => {
  return (
    <S.CardContainer bgColor={props.bgColor}>{props.children}</S.CardContainer>
  );
};

export default Card;
