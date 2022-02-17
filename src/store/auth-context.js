import React, { useEffect, useState } from "react";
import app from "../firebase/firebase-utils";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Spinner } from "../components/UI/LoadingSpinner/styles";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className="centered">
        <Spinner />
      </div>
    );
  }

  const userIsLoggedIn = !!currentUser;

  const logoutHandler = () => {
    signOut(getAuth())
      .then(() => {})
      .catch((error) => {
        console.log(error);
        alert(error);
      });
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
