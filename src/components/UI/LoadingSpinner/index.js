import React from "react";
import * as S from "./styles";

const LoadingSpinner = (props) => {
  return <S.Spinner>{props.children}</S.Spinner>;
};

export default LoadingSpinner;
