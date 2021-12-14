import React, { useEffect, useRef, useState } from "react";
import { Button, Column, Grid } from "../../styles/Essentials.styles";
import {
  NavbarButtons,
  NavbarContainer,
  NavbarGrid,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarWrapper,
} from "./Navbar.styles";
import logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {RiMenu2Line} from "react-icons/ri";
export default function Navbar({scrolled, navBar}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [showNavBar, setShowNavBar] = useState(false)
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  const navBarRef = useRef(null);

  useEffect(() => {
    
    const toggleOpen = (e) => {
      if (!navBarRef.current?.contains(e.target) && showNavBar ) {
        setShowNavBar(false);
      } else if (!navBarRef.current?.contains(e.target) && showNavBar  ) {
        setShowNavBar(false);
      }
    };
    window.addEventListener("click", toggleOpen);
    return () => {
      window.removeEventListener("click", toggleOpen);
    };
  }, [showNavBar]);
    

  return (
    <>
      <NavbarWrapper ref={navBar} scrolled={scrolled}>
        <NavbarContainer>
          <NavbarGrid ref={navBarRef} showNavBar={showNavBar} justify="space-between" wrap="wrap">
            <NavbarLinks sm={12} justify="flex-start" md={5} spacing="10">
              <NavbarLink className={navInfo => navInfo.isActive? "active": ''} to="/">Home</NavbarLink>
              <NavbarLink className={navInfo => navInfo.isActive? "active": ''} to="/about/">About</NavbarLink>
              <NavbarLink className={navInfo => navInfo.isActive? "active": ''} to="/pricing/">Pricing</NavbarLink>
              <NavbarLink className={navInfo => navInfo.isActive? "active": ''} to="/contact-us/">Contact Us</NavbarLink>
            </NavbarLinks>
            <Column sm={12} md={2} spacing="10">
              {width > 992 ? <NavbarLogo src={logo} /> : ""}
            </Column>
            <NavbarButtons sm={12} justify="flex-end" md={5} spacing="10">
              <Button transparent>Login In</Button>
              <Button>Sign Up Free</Button>
            </NavbarButtons>
          </NavbarGrid>
          {width < 992 ? (
            <Grid justify="space-between">
              <Column  md={5} justify="flex-start" spacing="10">
                {
                  showNavBar ?<RiMenu2Line size={30} color="var(--color-primary)" onClick={e => setShowNavBar(false)} /> : <GiHamburgerMenu size={30} color="var(--color-primary)" onClick={e => setShowNavBar(true)} />
                }
                
                
                
              </Column>
              <Column md={2} spacing="10">
                <NavbarLogo src={logo} />
              </Column>
              <Column md={5} spacing="10" justify="flex-end">
                <NavbarLink to="/login/">Login</NavbarLink>
              </Column>
            </Grid>
          ) : (
            ""
          )}
        </NavbarContainer>
      </NavbarWrapper>

    </>
  );
}
