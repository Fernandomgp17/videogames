import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from './DetailVideoGame.module.css';
import { Link } from 'react-router-dom';

const DetailVideoGame = ({myVideoGames}) => {
  const [videoGame,setVideoGame] = useState({})
  const {id} = useParams();


  useEffect(()=>{
    setVideoGame(myVideoGames?.find((myVideoGame)=>myVideoGame.id===+id))
  },[id])

  return (
    <div className={styled.detailContainer} >
      {
        <div className={styled.detailVideoGameContainer}>
          <h2 className={styled.titleVideoGame} >{videoGame.name}</h2>
          <img className={styled.imageDetailVideoGame} src={videoGame.image} alt={videoGame.name} />
          <div className={styled.ratingContainer}>
            <p className={styled.ratingTitle}>Rating</p>
            <p>{videoGame.rating}</p>
          </div>
          <p className={styled.titlePlatform}>Platforms</p>
          <div className={styled.platformContainer}>
            {
              videoGame.platforms?.map((plat,indice)=>{
                return <p key={indice}>{'✅'+plat}</p>
              })
            }
          </div>
          <p className={styled.genresTitle} >Genres</p>
          <div className={styled.genresContainer}>
            {
              videoGame.genres?.map((genre,indice)=>{
                return <p key={indice}>{'✅'+genre}</p>
              })
            }
          </div>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myVideoGames:state.myVideoGames
  }
}

export default connect(mapStateToProps,null)(DetailVideoGame);
