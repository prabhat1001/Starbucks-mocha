import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
        <img src="/images/logo.png" alt="logo" />
        <nav>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </nav>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    /* background-color: red; */
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    /* box-shadow: 0 0 10px 0 #000000; */

    img{
        width: 50px;
        height: 50px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30%;
    }

    a{
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        margin-right: 20px;
    }

    button{
        background-color: #cdfb4f;
        color: #355b1a;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 400;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 2px 2px 10px 0 #000000;
    }

    button:hover{
        background-color: #082920;
        color: #cdfb4f;
    }

    @media screen and (max-width: 768px){
        nav{
            display: none;
        }
    }

    

`;

export default Header