import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

function Trending() {
  return (
    <Container>
        <h4>Trending to Desiney +</h4>
        <Content>
        <Wrap>
            <Link to="/">
                <img src='https://static.wikia.nocookie.net/disney/images/6/6b/SadAlma.png'  alt=''/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to="/">
                <img src='https://static.wikia.nocookie.net/disney/images/6/6b/SadAlma.png'  alt=''/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to="/">
                <img src='https://static.wikia.nocookie.net/disney/images/6/6b/SadAlma.png'  alt=''/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to="/">
                <img src='https://static.wikia.nocookie.net/disney/images/6/6b/SadAlma.png'  alt=''/>
            </Link>
        </Wrap>
        </Content>
    </Container>
  )
};

const Container = styled.div`
    padding: 0 0 26px;
    
`;

const Content = styled.div`
    display: grid;
    gap: 25px;
    grid-gap: 24px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media(max-width: 768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`;

 const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    pointer: cursor;
    position: relative;
    transition: all 250ms cubic-bezier(0.25,0.45, 0.45,0.94) 0s;
    border: 3px solid rgba(249,249,249,0.1);

    img{
        inset: 0;
        display: block;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        top: 0;
        z-index: 1;
        transition: opacity 500ms ease-in-out 0s;
    }
     &:hover{
            box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transform: scale(1.05);
            border: 3px solid rgba(249,249,249,0.8);

        }
    }
 `;
export default Trending