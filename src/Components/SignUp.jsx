import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Main>
    <SignUpContainer>
        <h1>Sign Up</h1>
        <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to='/'>
                <button>Sign Up</button>
            </Link>
            
        </form>
    </SignUpContainer>
    <GIF>
        <img src="/images/gif-5.gif" alt="gif" />
    </GIF>
    </Main>

  )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(/images/background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    
`;

const SignUpContainer = styled.div`
    margin-top: 7%;
    margin-left: 20%;
    width: 30%;
    height: 70vh;
    background-color: #FBAA60;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    h1{
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: 400;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }

    input{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 1.2rem;
        font-weight: 400;
        background-color: #fddfc2;
        
    }

    button{
        width: 300px;
        height: 50px;
        border: none;
        border-radius: 25px;
        background-color: #CF5C00;
        color: #F1D26C;
        font-size: 1.2rem;
        font-weight: 400;
        cursor: pointer;
        box-shadow: 2px 2px 10px 0 #000000;
    }

    button:hover{
        background-color: #2B1200;
        color: #F1D26C;
        transform: scale(1.15);
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 768px){
        form{
            width: 80%;
        }
    }

`;

const GIF = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 25px;
        box-shadow: 2px 2px 20px  #1d1d1d79;
    }


`;

export default SignUp