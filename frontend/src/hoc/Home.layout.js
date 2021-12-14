import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
export default function HomeLayout() {

    const navBar = useRef(null)
    const [scrolled, setScrolled] = useState(false)
  window.addEventListener("scroll", (e) => {
      console.log(navBar?.current?.offsetHeight)
    if (window.scrollY > navBar?.current?.offsetHeight) {
        setScrolled(true)
    } else {
        setScrolled(false)

    }
  });

  return (
    <>
      <Navbar scrolled={scrolled} navBar={navBar} />
      <Outlet />
    </>
  );
}
