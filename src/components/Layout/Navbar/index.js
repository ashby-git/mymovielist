import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import * as S from "./styles";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <S.Header>
      <S.LogoLink to="/">
        <S.Logo>Logo</S.Logo>
      </S.LogoLink>
      <nav>
        <S.NavLinkGroup>
          {!isLoggedIn && (
            <S.NavLinkItem>
              <S.PageLink activeClassName="active" to="/auth">
                Login
              </S.PageLink>
            </S.NavLinkItem>
          )}
          {isLoggedIn && (
            <S.NavLinkItem>
              <S.PageLink activeClassName="active" to="/search">
                Search
              </S.PageLink>
            </S.NavLinkItem>
          )}
          {isLoggedIn && (
            <S.NavLinkItem>
              <S.PageLink activeClassName="active" to="/profile">
                MyList
              </S.PageLink>
            </S.NavLinkItem>
          )}
          {isLoggedIn && (
            <S.NavLinkItem>
              <S.LogoutButton onClick={logoutHandler}>Logout</S.LogoutButton>
            </S.NavLinkItem>
          )}
        </S.NavLinkGroup>
      </nav>
    </S.Header>
  );
};

export default Navbar;
