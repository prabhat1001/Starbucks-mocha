import React from 'react'
import styled from 'styled-components'
import VideoJS from '../Components/VideoJS'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <>
    <Wave src="/images/wave-1.png" />
    <MenuContainer>
        <h1>Popular Menu</h1>
        <MenuItems>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-1.png" alt="drink-1" />
                    <Details>
                        <h3>Pink Drink</h3>
                        <p>$5.82</p>
                    </Details>
                </Card>
            </Link>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-2.png" alt="drink-2" />
                    <Details>
                        <h3>Zombie Frapp..</h3>
                        <p>$4.95</p>
                    </Details>
                </Card> 
            </Link>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-3.png" alt="drink-3" />
                    <Details>
                        <h3>Frappuccino</h3>
                        <p>$3.25</p>
                    </Details>
                </Card>
            </Link>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-4.png" alt="drink-4" />
                    <Details>
                        <h3>Java Chip Frap..</h3>
                        <p>$5.79</p>
                    </Details>
                </Card>
            </Link>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-5.png" alt="drink-5" />
                    <Details>
                        <h3>Minty Cocoa</h3>
                        <p>$5.52</p>
                    </Details>
                </Card>
            </Link>

            <Link to='/order'>
                <Card>
                    <img src="/images/drink-6.png" alt="drink-6" />
                    <Details>
                        <h3>Caramel Frapp..</h3>
                        <p>$6.12</p>
                    </Details>
                </Card>
            </Link>

        </MenuItems>
        <Celebrating>
            <h1>We Are Celebrating, Come & Join Us!</h1>
        </Celebrating>
        <VideoJS />
        <GIFS>
            <img src="/images/gif-1.gif" alt="gif-1" />
            <img src="/images/gif-2.gif" alt="gif-2" />
        </GIFS>
        
    </MenuContainer>
    </>
    
  )
}

const Wave = styled.img`
    width: 100%;
    height: 300px;
`;

const MenuContainer = styled.div`
    width: 100%;
    height: 170vh;
    margin-top: -7px;
    display: block;
    background-color: #BACC81;
    h1{
        color: #013A20;
        margin-left: 3.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: 2.5rem;
    }

`;

const MenuItems = styled.div`
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    height: 40vh;
    /* background-color: #075300; */
    margin-top: 5vh;
    padding-left: 20px;
    margin-bottom: 10vh;
`;

const Card = styled.div`
    width: 200px;
    height: 260px;
    background-color: #fff;
    float: left;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    margin: 10px;
    img{
        width: 180px;
        height: 180px;
        border-radius: 10px;
        margin: 10px;
    }

    :hover{
        transform: scale(1.1);
        transition: all 0.2s ease;
        cursor: pointer;
        box-shadow: 2px 2px 20px #470b0273;

    }

`;

const Details = styled.div`
    width: 150px;
    height: 60px;
    /* background-color: #8080c0; */
    margin-left: auto;
    margin-right: auto;
    margin-top: -10px;

    h3{
        color: #000;
        text-align: left;
    }
    p{
        color: #00af2c;
        text-align: left;
        font-weight: 800;
        font-size: 1.2rem;
    }
`;

const Celebrating = styled.div`
    width: 100%;
    height: 10vh;
    /* background-color: #013A20; */
    margin-top: 10vh;
    /* margin-bottom: 5vh; */
    h1{
        color: #013A20; 
        text-align: left;
        margin-top: 5vh;
        font-size: 2.5rem;
        font-weight: 500;
    }

`;

const GIFS = styled.div`
    width: 20%;
    min-height: calc(100vh - 70px);
    /* margin-top: 5vh; */
    position: absolute;
    right: 0;
    top: 380%;

    img{
        width: 200px;
        height: 200px;
        border-radius: 25px;
        margin: 1rem;
    }
`;

export default Menu