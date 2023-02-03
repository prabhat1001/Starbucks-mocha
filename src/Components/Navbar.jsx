import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarContainer />
  )
}

const NavbarContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #082920;
`;

export default Navbar