/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import ImageSlide from './ImageSlide';
import Viewers from './Viewers';
import Recommends from './Recommends';
import Newtodesiney from './Newtodesiney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "./firebase";
import { setMovies } from '../features/movies/moviesSlice';
import { selectUserName } from '../features/user/userSlice';




function Home(props) {

   const dispatch = useDispatch();
   const userName = useSelector(selectUserName);

  // useEffect(() =>{

  //   db.collection("movies").onSnapshot((snapshot) =>{
  //     snapshot.docs.map((doc) => {
  //       console.log(recommends);
     
  //       // eslint-disable-next-line default-case
  //       switch(doc.data().type) {

          
  //         case "recommend":
  //           // recommends.push({id: doc.id, ...doc.data()});
  //           // eslint-disable-next-line react-hooks/exhaustive-deps
  //           recommends = [...recommends,{id: doc.id, ...doc.data()}];
           
  //           break;

  //         case "originals":
  //           // originals.push({id: doc.id, ...doc.data()});
  //           originals = [...originals, {id: doc.id, ...doc.data()}];
  //           //console.log(originals);
  //           break;

  //         case "new":
  //           // newDesneys.push({id: doc.id, ...doc.data()});
  //           newDesineys = [...newDesineys, {id: doc.id, ...doc.data()}];
            
  //           break;

  //         case "trending":
  //           // trendings.push({id: doc.id, ...doc.data()});
  //           trendings =[...trendings, {id: doc.id, ...doc.data()}];

  //           break; 
  //       };
  //       return(
  //         recommends, newDesineys,originals,trendings
  //       )
  //     }); 
  //   });
// dispatch(
//   setMovies({
//   recommend: recommends,
//   newDesiney: newDesineys,
//   originals: originals,
//   trendings: trendings,
// })); 


//   },[userName]);
useEffect(() => {
  const fetchMovies = async () => {
    const snapshot = await db.collection("movies").get();

    const moviesData = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    const recommends = moviesData.filter((movie) => movie.type === "recommend");
    const originals = moviesData.filter((movie) => movie.type === "originals");
    const newDesineys = moviesData.filter((movie) => movie.type === "new");
    const trendings = moviesData.filter((movie) => movie.type === "trending");

    dispatch(
      setMovies({
        recommend: recommends,
        newDesiney: newDesineys,
        originals: originals,
        trending: trendings,
      })
    );
  };

  fetchMovies();
}, [userName]);


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