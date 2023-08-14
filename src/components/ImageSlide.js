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

`;
export default ImageSlide