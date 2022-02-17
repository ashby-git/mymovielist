import React, { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
// import app from "../../firebase/firebase-utils";
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
          // await app
          // .getAuth()
          await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
          history.replace("/profile");
        } else {
          // await app
          // .getAuth()
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

////////////////////////////////////

// import React, { useState, useRef, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
// import LoadingSpinner from "../UI/LoadingSpinner";
// import * as S from "./styles";

// const AuthForm = () => {
//   const history = useHistory();
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   const authCtx = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     // optional: Add validation

//     setIsLoading(true);
//     let url;
//     if (isLogin) {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhgdNpwVvZX_ad7TeZ2FvEpRQAHcOpfOU";
//     } else {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhgdNpwVvZX_ad7TeZ2FvEpRQAHcOpfOU";
//     }
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         setIsLoading(false);
//         if (res.ok) {
//           return res.json();
//         } else {
//           return res.json().then((data) => {
//             let errorMessage = "Authentication failed!";
//             if (data && data.error && data.error.message) {
//               errorMessage = data.error.message;
//             }
//             throw new Error(errorMessage);
//           });
//         }
//       })
//       .then((data) => {
//         const expirationTime = new Date(
//           new Date().getTime() + +data.expiresIn * 1000
//         );
//         authCtx.login(data.idToken, expirationTime.toISOString());
//         history.replace("/");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   return (
//     <>
//       <S.PageBreak />
//       <S.AuthFormContainer>
//         <S.FormTitle>{isLogin ? "Login" : "Sign Up"}</S.FormTitle>
//         <form onSubmit={submitHandler}>
//           <S.FormContent>
//             <label htmlFor="email">Your Email</label>
//             <input type="email" id="email" required ref={emailInputRef} />
//           </S.FormContent>
//           <S.FormContent>
//             <label htmlFor="password">Your Password</label>
//             <input
//               type="password"
//               id="password"
//               required
//               ref={passwordInputRef}
//             />
//           </S.FormContent>
//           <S.Actions>
//             {!isLoading && (
//               <S.FormButton>
//                 {isLogin ? "Login" : "Create Account"}
//               </S.FormButton>
//             )}
//             {isLoading && (
//               //   <p>Sending request...</p>
//               <LoadingSpinner />
//             )}
//             <S.FormButtonToggle type="button" onClick={switchAuthModeHandler}>
//               {isLogin ? "Create new account" : "Login with existing account"}
//             </S.FormButtonToggle>
//           </S.Actions>
//         </form>
//       </S.AuthFormContainer>
//     </>
//   );
// };

// export default AuthForm;
