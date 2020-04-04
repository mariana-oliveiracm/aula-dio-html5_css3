import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
    position: absolute;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #588793;
`
const FooterItem = styled.div `
    text-decoration: none;
    font-size: 16px;
    color: #fff;
`


export default function footer(){
    return(
        <Footer>
            <FooterItem>
                Desenvolvido por Mariana Oliveira
            </FooterItem>
        </Footer>
    );
}