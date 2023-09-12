import styled  from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "./firebase";



const Detail = (props) =>{

    const { id } = useParams();

    const [detailData, setDetailData] = useState({})


    // useEffect(() =>{
    //     db.collection("movies")
    //         .doc(id)
    //         .get()

    //         .then((doc) => {
    //             if (doc.exists){
    //                 setDetailData(doc.data)
    //             }
    //             else{
    //                 console.log("No such adocument in firebase");
    //             }
    //         })
    //         .catch((error) =>{
    //             console.log(error);
    //         })
            
    // },[id])

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const snapshot = await db.collection("movies").doc(id).get();
      
           if (snapshot.exists){
            setDetailData({id: snapshot.id, ...snapshot.data() })
           }

           else{
            console.log("NO such collection in firebase..");
           }

          } catch (error) {
            // Handle any errors that occur during the fetch
            console.log(error);
          }
        };
      
        fetchMovies();
      }, [id]);
      
      

    return(
        <Container>
            <Background>
                <img src={detailData.backgroundimg} alt={detailData.title} />
            </Background> 
        <ImageTitle>
            <img src={detailData.titleimg} alt={detailData.title} />
        </ImageTitle>
        <ContentMeta>
            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="play" />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt="play-white" />
                    <span>Trailer</span>
                </Trailer>
                <Addlist>
                    <span />
                        
                    <span />
                </Addlist>
                <GroupIcon>
                    <img src="/images/group-icon.png" alt="" />
                </GroupIcon>
            </Controls>
                <Subtitle>
                    {detailData.subtitle}
                </Subtitle>

                <Description>
                {detailData.description}
                </Description>

                

        </ContentMeta>
        </Container>
    )
}

const Container = styled.div`

position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px );
`;

 const Background = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  opacity: 0.6;
  z-index: -1;
  position: fixed;
  img{
    width: 100vw;
    height: 100vh;
     @media (max-width: 768px){
        width: initial;
       
     }
  }

  
    
 `;

 const ImageTitle = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: start;
    -webkit-box-pack:start;
    margin: 0px auto;
    height: 18 f vw;
    min-height: 178px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw; 
    }
 `;

const ContentMeta = styled.div`
    max-width: 874px;

`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 12px 0px;
    min-height: 56px;
@media(max-width: 768px){
    font-size: 12px;
}

`;

const Player = styled.button`
    font-size: 15px;
    padding: 0px 20px;
    margin: 0px 22px 0px 0px;
    height: 56px;
   cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);
    
    


img{
    width: 32px;
}

&:hover{
    background: rgb(198,198,298);
}

@media(max-width: 768px){
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img{
        width: 25px;
    }
}

`;

const Trailer = styled.button`
background: rgba(0,0,0,0.2);
color: rgb(198,198,298);
border: 2px solid rgb(249,249,249);
padding: 0px 30px;
font-size: 15px;
height: 56px;
letter-spacing: 1.8px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
margin: 0px 12px;
text-transform: uppercase;

img{
    width: 32px;


}

&:hover{
    background: rgb(198,198,200);
    color: rgb(249,249,249);
   
}

@media(max-width: 768px){
    padding: 0px 18px;
    font-size: 12px;
    height: 45px;
    img{
        width: 25px
    }
}

`;


const Addlist = styled.div`
        width: 45px;
        height: 45px;
        background-color: rgba(0,0,0,0.7);
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px  solid rgb(249,249,249);
        margin-left: 15px;
        cursor: pointer;

        span{
             background-color: rgb(249,249,249);
             display: inline-block;

             &:first-child{
                height: 2px;
                transform: translate(1px, 0px) rotate(0deg);
                width: 16px;
             }

             &:nth-child(2){
                height: 16px;
                transform: translatex(-8px) rotate(0deg);
                width: 2px;
             }
        }
        
`;

const GroupIcon = styled.div`
    width: 45px;
    height: 45px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    border: 2px solid rgb(249,249,249);
    cursor: pointer;


    &:hover{
        background-color: rgba(0,0,0,0.6);
    }

    img{
        width: 100%;
    }


`;

const Subtitle = styled.div`
     color: rgb(249,249,249);
     font-size: 15px;
     min-height: 20px;

     @medi(max-width: 768px){
        font-size: 12px;
     }
`;

const Description = styled.div`

     line-height: 1.4;
     font-size: 20px;
     color: rgb(249,249,249);
     padding: 16px;
     background-color: rgba(0,0,0,0.5);
     border-radius: 4px;
     

     @media (max-width: 768px){
        font-size: 14px;
     }

`;

export default Detail