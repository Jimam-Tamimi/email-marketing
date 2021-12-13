import styled from "styled-components";
import { Column, Container, Flex, Grid } from "../../styles/Essentials.styles";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.header`
  ${Flex}
  width: 100vw;
  min-height: 112px;
  border-bottom: 1px solid var(--color-primary);
`;

export const NavbarContainer = styled(Container)`
  ${Flex}
  justify-content: space-between;
  align-items: center;
  height: 112px;
`;

export const NavbarLogo = styled.img`
 
`;

export const NavbarGrid = styled(Grid)`
    z-index: 2;

  @media (max-width: 992px) { 
    transition: var(--main-transition);
    position: absolute;
    left: 0;
    max-width: 65%;
    min-width: 390px;
    top: 112px;
    background: white;
    border-top: 1px solid var(--color-primary);
    height: calc(100vh - 112px);
    ${({showNavBar}) => showNavBar ? `
    transform: translateX(0%);
    
    `: `
    transform: translateX(-100%);
    
    `} 
  }
`;

export const NavbarLinks = styled(Column)`
  @media (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const NavbarLink = styled(NavLink)`
  margin: 0px 18px;
  font-weight: 600;
  transition: var(--main-transition);
  &:hover {
    color: var(--color-primary);
  }
  @media (max-width: 992px) {
    margin: 10px 18px;
  }
  &.active{
    color: var(--color-primary);

  }
`;
export const NavbarButtons = styled(Column)`
  @media (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
  }
`;
