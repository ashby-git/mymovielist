import React from "react";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Header>
      <S.LogoLink to="/">
        <S.Logo>Logo</S.Logo>
      </S.LogoLink>
      <nav>
        <S.NavLinkGroup>
          <S.NavLinkItem>
            <S.PageLink activeClassName="active" to="/auth">
              Login
            </S.PageLink>
          </S.NavLinkItem>
          <S.NavLinkItem>
            <S.PageLink activeClassName="active" to="/search">
              Search
            </S.PageLink>
          </S.NavLinkItem>
          <S.NavLinkItem>
            <S.PageLink activeClassName="active" to="/profile">
              MyList
            </S.PageLink>
          </S.NavLinkItem>
          <S.NavLinkItem>
            <S.LogoutButton>Logout</S.LogoutButton>
          </S.NavLinkItem>
        </S.NavLinkGroup>
      </nav>
    </S.Header>
  );
};

export default Navbar;
