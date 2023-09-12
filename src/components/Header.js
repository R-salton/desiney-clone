// eslint-disable-next-line react-hooks/exhaustive-deps
import { styled } from 'styled-components';
import {auth, provider} from './firebase';
import { useDispatch,useSelector  } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectUserName,
         selectUserPhoto,
         setUSerloginDetails,
         setSignOutState 
        } from '../features/user/userSlice';

function Header(props) {
    const dispatch = useDispatch()
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() =>{
        auth.onAuthStateChanged( async (user) =>{
            if(user){
                setUser(user);
             history('/home')
            }
        });
    },[userName]) 


   

const handleAuth = async() =>{

    if(!userName){
            auth
                .signInWithPopup(provider)
                .then((result) =>{
                    setUser(result.user)
                })
                .catch((error) =>{
                    alert(error.message);
                });
            } else if(userName){
                 auth
                    .signOut()
                    .then((result) =>{
                        dispatch(setSignOutState());
                        history("/")
                    }).catch((error) =>{
                        alert(error.message)
                    })
                }
            
        
        }
        
    
    const setUser = (user) =>{
        dispatch(setUSerloginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        })
        );
    };
const [hover,setHover] = useState("")
    const getLogout = () =>{
        setHover("visible");
    }




return (
   <Nav>
   <Logo>

    <img src='/images/logo.svg' alt='logo'/>
   </Logo>
   {!userName ?
    <Loginbtn onClick={handleAuth}> Login</Loginbtn>
    :
    <>
    <NavMenu >
    <Link to={"/home"}><a href='/'><img src='/images/home-icon.svg' alt='homeicone' /><span>HOME</span></a>
    </Link>
    <a href='/'><img src='/images/search-icon.svg' alt='homeicone' /><span>SEARCH</span></a>
    <a href='/'><img src='/images/watchlist-icon.svg' alt='homeicone' /><span> WATCHLIST</span></a>
    <a href='/'><img src='/images/original-icon.svg' alt='homeicone' /><span>ORGINALS</span></a>
    <a href='/'><img src='/images/movie-icon.svg' alt='homeicone' /><span>MOVIES</span></a>
    <a href='/'><img src='/images/series-icon.svg' alt='homeicone' /><span>SERIES</span></a>
   </NavMenu>

   <SignOut>
   <UserImage src = {userPhoto} alt={userName} onMouseOver={getLogout}/>
   <DropDown onClick={handleAuth }>Signout</DropDown>
   </SignOut>
    </>
    }
   
   </Nav>
  );
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
    }

 
`;

const Loginbtn = styled.a`
    background: #000;
    border: 1px solid #f9f9f9;
    color: #f9f9f9;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 16px;
    transition: ease-in-out .2s;
    letter-spacing: 1.5px;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

    @media (max-width: 768px){
        padding: 6px 10px;
        font-size: 12px;
    }
`;

const UserImage = styled.img`
    width: 100%;
    border-radius: 100%;
   
    
  

`;

const DropDown =styled.p`
position: absolute;
font-size: 16px;
letter-spacing: 1.5px;
background: rgb(19,19,19);
padding: 10px ;
top: 0px;
border: 1px solid #fff;
border-radius: 4px;
opacity: 0;
visibility:;
cursor: pointer;


`;

const SignOut = styled.div`

 height: 50px;
 width: 50px;
display:flex;
align-items: center;
justify-content: center;

&:hover{
        ${DropDown} {
            opacity: 1;
            top: 43px;
            transition-duration: .4s; 

            &:hover{
                color: #000;
                background-color: #fff;

            }
        }
    }
    

`;






export default Header