import React from 'react';
import logo from '../logo.png';
import styled from 'styled-components';

const Nav = styled.div `
    background-color: #BF9BE1;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
`

const NavItem = styled.p `
    font-size: 18px;
    font-family: 'Helvetica';
    font-weight: bold;
    color: #16002A;
    padding-left: 50px;
`

export default function header(){
    return(
        <Nav>
            <NavItem>Home</NavItem>
            <NavItem>Contato</NavItem>
            <NavItem>Sobre</NavItem>
            <img src={logo} className="App-logo" alt="logo"  style={{width: 100, height: 100}}/>
        </ Nav>
    );
}