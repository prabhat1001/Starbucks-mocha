import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <>
    <Wave src="/images/wave-1.png" />
    <MenuContainer>
        <h1>Popular Menu</h1>
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
    height: 100vh;
    margin-top: -7px;
    background-color: #BACC81;
    h1{
        color: #013A20;
        margin-left: 3.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: 2.5rem;
    }
`;

export default Menu