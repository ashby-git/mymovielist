import React, { useCallback, useEffect, useState } from "react";
import app from "..//firebase/firebase-utils";
import { Spinner } from "../components/UI/LoadingSpinner/styles";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Spinner />;
  }

  const userIsLoggedIn = !!currentUser;

  const logoutHandler = () => {
    app.auth().signOut();
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//////////////////////////////////

// import React, { useCallback, useEffect, useState } from "react";

// let logoutTimer;

// const AuthContext = React.createContext({
//   token: "",
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjustedExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjustedExpirationTime - currentTime;
//   return remainingDuration;
// };

// const retrievedStoredToken = () => {
//   const storedToken = localStorage.getItem("token");
//   const storedEpirationDate = localStorage.getItem("expirationTime");

//   const remainingTime = calculateRemainingTime(storedEpirationDate);

//   if (remainingTime <= 60000) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");
//     return null;
//   }

//   return {
//     token: storedToken,
//     duration: remainingTime,
//   };
// };

// export const AuthContextProvider = (props) => {
//   const tokenData = retrievedStoredToken();
//   let initialToken;
//   if (tokenData) {
//     initialToken = tokenData.token;
//   }
//   const [token, setToken] = useState(initialToken);

//   const userIsLoggedIn = !!token;

//   const logoutHandler = useCallback(() => {
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");

//     if (logoutTimer) {
//       clearTimeout(logoutTimer);
//     }
//   }, []);

//   const loginHandler = (token, expirationTime) => {
//     setToken(token);
//     localStorage.setItem("token", token);
//     localStorage.setItem("expirationTime", expirationTime);

//     const remainingTime = calculateRemainingTime(expirationTime);

//     logoutTimer = setTimeout(logoutHandler, remainingTime);
//   };

//   useEffect(() => {
//     if (tokenData) {
//       console.log(tokenData.duration);
//       logoutTimer = setTimeout(logoutHandler, tokenData.duration);
//     }
//   }, [tokenData, logoutHandler]);

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
