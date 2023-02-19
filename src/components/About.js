import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../theme/theme";
const About = () => {
  return (
    <>
      <AboutLayout>
        <GetInTouch>
          <a className="slide1" href="mailto:nilesh_kumar_nk@outlook.com">
            Get in Touch
          </a>
          <br />
          <a className="slide2" href="mailto:nilesh_kumar_nk@outlook.com">
            Get in Touch
          </a>
        </GetInTouch>
        <FooterLink>
          <a href="https://www.twitter.com/nilesh14k/">Twitter</a>
          <a href="https://www.facebook.com/nilesh14k/">Facebook</a>
          <a href="https://www.linkedin.com/in/nilesh14k/">LinkedIn</a>
          <a href="https://github.com/nilesh14k">Github</a>
          <a href="https://www.instagram.com/nilesh14k/">Instagram</a>
        </FooterLink>
      </AboutLayout>
    </>
  );
};

const AboutLayout = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20% 0;
  background-color: ${Theme.bgColor};
  text-align: center;
`;
const GetInTouch = styled.div`
  height: 100px;
  background-color: ${Theme.bgColor};
  color: ${Theme.textColor};
  overflow: hidden;
  a {
    font-family: "Ubuntu", sans-serif;
    text-decoration: none;
    color: ${Theme.textColor};
    &:hover {
      text-decoration: none;
    }
  }
  .slide1 {
    top: 0%;
    position: relative;
    height: 100%;
    cursor: pointer;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-out;
  }
  .slide2 {
    top: 0%;
    position: relative;
    height: 100%;
    cursor: pointer;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-out;
  }
  &:hover > .slide1 {
    top: -100%;
  }
  &:hover > .slide2 {
    top: -100%;
  }
`;

const FooterLink = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px 0px;
  font-size: 1rem;
  font-family: "Ubuntu", sans-serif;
  background-color: ${Theme.bgColor};
  color: ${Theme.textColor} !important;
  text-align: center;
  a {
    padding: 0px 20px;
    text-decoration: none;
    color: ${Theme.textColor};
    &:hover {
      text-decoration: none;
    }
  }
`;

export default About;
