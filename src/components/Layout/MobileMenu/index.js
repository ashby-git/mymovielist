import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import AuthContext from "../../../store/auth-context";
import { LogoutButton } from "../Navbar/styles";
import * as S from "./styles";

const MobileMenu = ({ isOpen, toggle }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <S.MobileMenuContainer isOpen={isOpen} onClick={toggle}>
      <S.CloseIconWrapper onClick={toggle}>
        <FaTimes />
      </S.CloseIconWrapper>
      <S.PageLinkGroup>
        <S.PageLinkItem>
          <S.PageLink to="/">Home</S.PageLink>
        </S.PageLinkItem>
        {!isLoggedIn && (
          <S.PageLinkItem>
            <S.PageLink activeClassName="active" to="/auth">
              Login
            </S.PageLink>
          </S.PageLinkItem>
        )}
        {isLoggedIn && (
          <S.PageLinkItem>
            <S.PageLink activeClassName="active" to="/search">
              Search
            </S.PageLink>
          </S.PageLinkItem>
        )}
        {isLoggedIn && (
          <S.PageLinkItem>
            <S.PageLink activeClassName="active" to="/profile">
              MyList
            </S.PageLink>
          </S.PageLinkItem>
        )}
        {isLoggedIn && (
          <S.PageLinkItem>
            <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
          </S.PageLinkItem>
        )}
      </S.PageLinkGroup>
    </S.MobileMenuContainer>
  );
};

export default MobileMenu;
