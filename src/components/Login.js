import React from 'react'
import { styled } from 'styled-components'


const Login=(props) => {
  return (
    <Container>
        <Content>
            <Cta>
             <CtaLogo src="/images/cta-logo-one.svg" alt='###'/>
                <SignUp href='##'>GET ALL THERE FOR 12.99$/MONTH</SignUp>
                <Description>Unlimited movies, TV shows, and more. Watch anywhere. 18+ only. Includes Hulu(ad-supported) plan. access from each service separately. Offer valid for eligible subscribers only.</Description>
                <CtaLogoTwo src="/images/cta-logo-two.png" alt="Logo Two" />
            </Cta>
            <BgImage />
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
  display: flex;
  flex-direction: column;
  text-alingn: center;
  height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 40px;
  height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    position:absolute;
    top:0;
    right: 0;
    left:0;
    z-index: -1;
`;

const Cta = styled.div`
    margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left:auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CtaLogo = styled.img`
  margin-bottom: 12px;
  ${'' /* max-width: 600px; */}
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: 7 00;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px;
  border: 1px solid transparent;
  border-radius: 4px; 

  &:hover{
    background-color: #0483ee;
  } 

`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: hsla(0,0%,95.3%,1.0);
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CtaLogoTwo = styled.img`
    width: 100%;
    max-width:600px;
    margin-bottom: 20px;
    transition: tranform .4s;
    display: inline-block;
    vertical-align: bottom;
`;


  





export default Login