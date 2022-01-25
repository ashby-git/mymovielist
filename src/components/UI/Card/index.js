import React from "react";
import * as S from "./styles";

const Card = (props) => {
  return <S.CardContainer>{props.children}</S.CardContainer>;
};

export default Card;
