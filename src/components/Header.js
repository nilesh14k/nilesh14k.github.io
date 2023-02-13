import React from "react";
import styled from "styled-components";
import { Theme } from "../theme/theme";

const Header = () => {
  return (
    <Navbar>
      <span>Nilesh Portfolio</span>
      {/* <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
      <a href="/js/">JavaScript</a> |<a href="/python/">Python</a> */}
    </Navbar>
  );
};

const Navbar = styled.nav`
  position: absolute;
  top: 0%;
  width: 100%;
  text-align: center;
  background-color: transparent;
  font-size: 2rem;
  font-family: "Ubuntu", sans-serif;
  color: ${Theme.textColor};
  z-index: 2;
`;
export default Header;
