import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import * as S from "./styles";

const Welcome = () => {
  const authCtx = useContext(AuthContext);

  return (
    <S.WelcomeContainer>
      <S.Title>Welcome to MyMovieList!</S.Title>
      <Card bgColor="lightPurple">
        <S.GetStartedContainer to={authCtx.isLoggedIn ? "/search" : "/auth"}>
          <S.Subheading>Get Started!</S.Subheading>
          <S.Textbox>
            Click here to get started with your own MovieList now.
          </S.Textbox>
        </S.GetStartedContainer>
      </Card>
    </S.WelcomeContainer>
  );
};

export default Welcome;
