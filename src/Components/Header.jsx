import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <img src="/images/logo.png" alt="logo" />
      <Nav>
        <a id="home" href="#">
          Home
        </a>
        <a id="about" href="#">
          About
        </a>
        <a id="contact" href="#">
          Contact
        </a>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin: 0;
  /* background-color: red; */
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 20px;

  //for bigger screens
  @media (min-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      margin-right: 0px;
    }

    a:hover {
      color: #cdfb4f;
    }

    button {
      background-color: #cdfb4f;
      color: #355b1a;
      width: 100px;
      height: 50px;
      border: none;
      /* padding: 5px 50px; */
      border-radius: 5px;
      font-weight: 400;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 2px 2px 10px 0 #000000;
    }

    button:hover {
      background-color: #082920;
      color: #cdfb4f;
    }
  }

  //for medium screens
  @media (min-width: 426px) and (max-width: 767px) {
    img {
      width: 40px;
      height: 40px;
    }

    a {
      text-decoration: none;
      color: #fff;
      font-size: 0.8rem;
      margin-right: 0px;
    }

    a:hover {
      color: #cdfb4f;
    }

    button {
      background-color: #cdfb4f;
      color: #355b1a;
      width: 80px;
      height: 40px;
      border: none;
      /* padding: 5px 50px; */
      border-radius: 5px;
      font-weight: 400;
      font-size: 0.8 rem;
      cursor: pointer;
      box-shadow: 2px 2px 10px 0 #000000;
    }

    button:hover {
      background-color: #082920;
      color: #cdfb4f;
    }
  }

  // for smaller screens
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    height: 45px;

    img {
      width: 30px;
      height: 30px;
    }

    #home,
    #about,
    #contact {
      display: none;
    }

    button {
      background-color: #cdfb4f;
      color: #355b1a;
      width: 70px;
      height: 35px;
      border: none;
      align-items: center;
      /* padding: 5px 50px; */
      border-radius: 5px;
      font-weight: 400;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 2px 2px 10px 0 #000000;
    }

    button:hover {
      background-color: #082920;
      color: #cdfb4f;
    }
  } ;
`;

const Nav = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  /* background-color: #000000; */
  height: 100%;
  width: 400px;
  align-items: center;
  justify-content: space-around;

  //for medium screen
  @media (min-width: 426px) and (max-width: 767px) {
    /* background-color: #000000; */
    width: 300px;
    right: 5px;
  }

  //for smaller screens
  @media (max-width: 425px) {
    /* background-color: #000000; */
    width: 100px;
    right: 5px;
  }
`;

export default Header;
