import React from 'react';
// import image from '../images/landing-bg.png';
import './LandingPage.css'

//navbar imported
import Navbar from '../Components/Navbar';
//styled components imported
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <MainContainer>
        <Navbar />
        <Heading className='Heading'>
            <h1>Delicious Deals</h1>
        </ Heading>
        <Cafe src="/images/cafe.jpg" />
        <Latte src="/images/latte.jpg" />
        <Brew src="/images/brew-img.png"/>
        <PriceDrop>
            <h2>- 20%</h2>
            <Bag><img src='/images/bag.png' alt='bag'></img></Bag>
        </PriceDrop>
        <Details>
            <h4>Cold Brew Coffee & <span>Milk</span></h4>
            <h6>$12.49</h6>
            <h2>$9.99</h2>
        </Details>
        <Cap>
            <h3>Only the <span>highest quality</span> of our coffee drinks</h3>
            <><h6>Enjoy your drink!</h6></>
            
        </Cap>  
        <Shadow />
        <Semicircle />

    </MainContainer>
  )
}

const MainContainer = styled.div`
    margin:0;
    height: 100vh;
    background-image: url('/images/landing-bg.png');
    background-size: cover;
`;

const Heading = styled.h1`
    position: absolute;
    /* background-color: blue; */
    /* height: auto; */
    width: 900px;
    font-weight: 100;
    top: 50%;
    left: 30%;
    transform: translate(-45%, -85%);
    color: #fff;
    font-size: 5rem;
    line-height: 10rem;

`;

const Cap = styled.div`
    z-index: 3;
    position: absolute;
    width: 450px;
    top: 80%;
    left: 30%;
    transform: translate(-88%, -50%);
    color: #fff;
    font-size: 2rem;
    line-height: 3.5rem;
    /* letter-spacing: 0.5rem; */
    /* text-shadow: 0 0 1rem #000; */

    span{
        padding-bottom: 1px;
        border-bottom-style: solid;
        border-bottom-width: 3.1px;
        width: fit-content;
        border-bottom-color: #cdfb4f;
    }
    
    h6{
        color:#cdfb4f;
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }

`;

const Brew = styled.img`
    z-index: 2;
    position: absolute;
    top: 64%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;
`;

const PriceDrop = styled.div`

    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(70%, 100%);        
    display: flex;

    h2{
        height: 50px;
        width: 120px;
        border-radius: 25px;
        color: #cdfb4f;
        background-color: #082920;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 15px 10px 20px -6px #000000ce;
        margin-right: 20px;
    }

    img{
       width: 30px;
       height: 30px;
       margin-top: 10px;
       margin-left: 10px;
    }
  
`;

const Bag = styled.div`
        height: 50px;
        width: 50px;
        border-radius: 50%;
        box-shadow: 15px 10px 20px -6px #000000ce;
        background-color: #cdfb4f;
`;

const Details = styled.div`
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    transform: translate(140%, 90%);
    align-items: flex-end;
    color: #fff;
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 1rem #000;

    h6{
        color: #999999;
        text-decoration: line-through;
    }

    h2{
        color: #cdfb4f;
    }

`;

const Cafe = styled.img`
    z-index: 4;
    position: absolute;
    top: 35%;
    left: 55%;
    transform: translate(200%, -50%);
    border-radius: 100px;
    /* box-shadow: 10px 10px 20px -6px #000000ce; */
    height: 250px;
    width: 150px;
`;

const Latte = styled.img`
    z-index: 5;
    position: absolute;
    top: 45%;
    left: 67%;
    transform: translate(200%, -50%);
    border-radius: 100px;
    /* box-shadow: 10px 10px 20px -6px #000000ce; */
    height: 250px;
    width: 150px;
`;

const Shadow = styled.div`
    z-index: 1;
    background: linear-gradient(to top,
                rgb(0, 0, 0), rgba(0, 0, 0, 0.658));
            filter: blur(2.5em);
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 400px;
    border-radius: 100%;
    /* background-color: #000; */

`;

const Semicircle = styled.div`
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 600px;
    border-radius: 450px 450px 0 0;
    background-color: #082920;
`;

export default LandingPage;


    