import React from 'react'
import { styled } from 'styled-components'

function Header() {
  return (
   <Nav>
   <Logo>

    <img src='/images/logo.svg' alt='logo'/>
   </Logo>
   <NavMenu>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>HOME</span></a>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>SEARCH</span></a>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>WATCHLIST</span></a>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>ORGINALS</span></a>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>MOVIES</span></a>
    <a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>SERIES</span></a>
   </NavMenu>
   </Nav>
  )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 36px;
    transition: opacity .5s ease-out;
    letter-spacing: 16px;
    ${'' /* background: transparent; */}
    z-index: 3;

`;

const Logo = styled.a`
    width: 80px;
    padding: 0;
    max-height: 70px;
    margin-top: 10px;
    transition: all .2s ease 0s;
    font-size: 0;
    display: inline-block;

    img{
        width:100%;
        display:block;
    }


`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    flex-flow: row nowrap;
    padding:0;
    margin: 0;
    position:relative;
    margin-right: auto;
    margin-left:30px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
    }

    img{
        height: 25px;
        width: 25px;
        z-index: auto;
    }
     span{
        color: rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.4px;
        line-height: 1.08;
        margin-left: 8px;
        padding: 0px 0px;
        white-space: nowrap;
        position:relative;

        &:before{
            background-color: rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        }
     }
     &:hover {
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
     }

    @media (max-width: 768px){
        display: none;
    }
`;

export default Header