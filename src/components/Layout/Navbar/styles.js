import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  height: 5rem;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: fixed;
  width: 80%;
  z-index: 20;
`;

export const LogoLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;

export const Logo = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  color: white;
  margin: 0;
`;

export const NavLinkGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const MenuIconWrapper = styled.div`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const NavLinkItem = styled.li`
  margin: 0 1rem;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: #c291e2;
  }

  &.${(props) => props.activeClassName} {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  font: inherit;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #c291e2;
    color: #38015c;
  }
`;
