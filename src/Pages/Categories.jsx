import React from 'react'
import styled from 'styled-components'
// import './Categories.css'

const Categories = () => {
  return (
    <CategoriesContainer>
        <CategoriesBox>
            <h2>Handcrafted Curations</h2>
            <ItemsContainer>
                <Item>
                    <img src='/images/bestseller.jpg' alt='bestsellar'></img>
                    <h3>Bestsellar</h3>
                </Item>
                <Item>
                    <img src='/images/drinks.jpg' alt='drinks'></img>
                    <h3>Drinks</h3>
                </Item>
                <Item>
                    <img src='/images/food.jpg' alt='food'></img>
                    <h3>Food</h3>
                </Item>
                <Item>
                    <img src='/images/coffee-at-home.jpg' alt='CAH'></img>
                    <h3>Coffee at Home</h3>
                </Item>
                <Item>
                    <img src='/images/ready-to-eat.jpg' alt='RTE'></img>
                    <h3>Ready to Eat</h3>
                </Item>
                
            </ItemsContainer>
        </CategoriesBox>

        <Cheers>
            <img src="/images/cheers.gif" alt="cheers" />
            <h1>"Start the Day with a Smile & Starbucks"</h1>
        </Cheers>
    </CategoriesContainer>
  )
}

const CategoriesContainer = styled.div`
    /* background-color: grey; */
    height: 150vh;
    width: 100%;
`;

const CategoriesBox = styled.div`
    /* background-color: #ec2b2b; */
    width: 100%;
    height: 40vh;
    margin-top: 50px;
    margin-bottom: 5vh;
    h2{
        color: #A82810;
        margin-left: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: 2.5rem;
    }
`;

const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 96%;
    margin-left: 2%;
    border-radius: 25px;
    background-color: #FBC490;
`;

const Item = styled.div`
    float: left;
    /* width: 33.33%; */
    padding: 5px;
    
    img{
        width: 150px;
        height: 150px;
        border-radius: 25px;
        
    }

    img:hover{
        transform: scale(1.015);
        transition: all 0.2s ease;
        cursor: pointer;
        box-shadow: 2px 2px 20px #470b0273;
    }

    h3{
        font-size: 1.2rem;
        margin-top: 10px;
        text-align: center;
        font-weight: 400;
    }

`;

const Cheers = styled.div`
    width: 65%;
    height: 48%;
    margin-top: 11%;
    background-color: #FBC490;
    border-radius: 0 50px 50px 0;
    /* box-shadow: 2px 2px 20px  #1d1d1d79; */
    display: flex;
    /* margin-top: 8%; */

    img{
        width: 100%;
        height: 100%;
        border-radius: 0 50px 50px 0;
        box-shadow: 2px 2px 20px  #1d1d1d79;
    }

    h1{
        color: #B52B40;
        font-size: 4rem;
        margin-top: 10%;
        margin-left: 10%;
        font-weight: 400;
        line-height: 5rem;
        letter-spacing: 0.1rem;
    }

`; 

export default Categories