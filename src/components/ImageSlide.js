import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import styled  from 'styled-components';

function ImageSlide(props) {
    const settings ={
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShiw: 1,
        slideToScroll: 1,
        autoplay: true,
      };

  return (
        <Carousel {...settings}>
           <Wrap>
            <a href='###'>
            <img src="/images/slider-badging.jpg" alt='' />  
            </a>
           </Wrap>
           <Wrap>
            <a href='###'>
            <img src="/images/slider-scales.jpg" alt='' />  
            </a>
           </Wrap>
           <Wrap>
            <a href='###'>
            <img src="/images/slider-badag.jpg" alt='' />  
            </a>
            </Wrap>
            <Wrap>
                <a href='###'>
                <img src="/images/slider-scale.jpg" alt='' />  
                </a>
            </Wrap>
        
        </Carousel>
   
  );
};

const Carousel =styled(Slider)`
    margin-top: 20px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0,2s ease 0s;
        }
    }
     ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150,150,171);
        }
    }

    ul li.slick-active button:before {
        color: #fff;
    }
    .slick-list{
        overflow: initial;
    }
    .slick-prev{
        left: -75px;

    }

    .slick-next{
        right: -75px;
    }

`;

const Wrap = styled.div`
     border-radius: 4px;
     cursor: pointer;
     position: relative;
     max-height: 310px;
     a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -18px, rgb(0 0 0/73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        height: 310px;
       
        
     
     img{
        width: 100%;
        height:100%;
     }
    &:hover{
            padding: 0;
            border: 4px solid rgba(249,249,249, 0.8); 
            transform-duration: 300ms;
        }

        @media(max-width: 768px){
            max-height: 120px; 
        }
     }
`;
export default ImageSlide