import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileMenuContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #38015c;
  display: flex;
  top: 0;
  left: 0;
  box-shadow: 0px 1px 20px #c8cae7;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const PageLinkGroup = styled.ul`
  display: grid;
  margin: 2rem auto;
`;

export const PageLinkItem = styled.li`
  text-align: center;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 5rem;

  &:hover {
    color: #c291e2;
  }

  &.${(props) => props.activeClassName} {
    text-decoration: underline;
  }
`;
