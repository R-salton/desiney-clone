import React from 'react';
import styled from 'styled-components';
import ImageSlide from './ImageSlide';
import Viewers from './Viewers';
import Recommends from './Recommends';
import Newtodesiney from './Newtodesiney';
import Originals from './Originals';
import Trending from './Trending';


function Home() {



  return (
   <Container>
    <ImageSlide />
    <Viewers />
    <Recommends />
    <Newtodesiney />
    <Originals />
    <Trending />
   </Container>
  )
}

const Container = styled.main`
  position: relative;
  top: 75px;
  overflow-x: hidden;
  display: block;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  &:after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 8px;
    opacity: 1;
    z-index: -1;
  }

`;

export default Home