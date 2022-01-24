import React, { useState, useRef } from "react";
// import { useHistory } from "react-router-dom";
import * as S from "./styles";

const AuthForm = () => {
  //   const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //   const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSmNhl6fcN7uZQVDZ9zaUMO8jO2qLTBgk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSmNhl6fcN7uZQVDZ9zaUMO8jO2qLTBgk";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      //   .then((data) => {
      //     const expirationTime = new Date(
      //       new Date().getTime() + +data.expiresIn * 1000
      //     );
      //     authCtx.login(data.idToken, expirationTime.toISOString());
      //     history.replace("/");
      //   })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <S.AuthFormContainer>
      <S.FormTitle>{isLogin ? "Login" : "Sign Up"}</S.FormTitle>
      <form onSubmit={submitHandler}>
        <S.FormContent>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </S.FormContent>
        <S.FormContent>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </S.FormContent>
        <S.Actions>
          {!isLoading && (
            <S.FormButton>{isLogin ? "Login" : "Create Account"}</S.FormButton>
          )}
          {isLoading && <p>Sending request...</p>}
          <S.FormButtonToggle type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </S.FormButtonToggle>
        </S.Actions>
      </form>
    </S.AuthFormContainer>
  );
};

export default AuthForm;
