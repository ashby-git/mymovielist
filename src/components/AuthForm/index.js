import React, { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import * as S from "./styles";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);
      const auth = getAuth();

      try {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
          history.replace("/profile");
        } else {
          await createUserWithEmailAndPassword(
            auth,
            enteredEmail,
            enteredPassword
          );
          history.replace("/");
        }
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    },
    [history, isLogin]
  );

  return (
    <>
      <S.PageBreak />
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
              <S.FormButton>
                {isLogin ? "Login" : "Create Account"}
              </S.FormButton>
            )}
            {isLoading && <LoadingSpinner />}
            <S.FormButtonToggle type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </S.FormButtonToggle>
          </S.Actions>
        </form>
      </S.AuthFormContainer>
    </>
  );
};

export default AuthForm;
