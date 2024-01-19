import React from 'react';
import { connect } from 'react-redux';
import VideoGame from '../VideoGame/VideoGame';
import styled from './VideoGames.module.css';

const VideoGames = ({myVideoGames}) => {
  return (
    <div className={styled.videoGamesContainer} >
      {
        myVideoGames.map((videoGame)=>{
          return <VideoGame
                    key={videoGame.id}
                    id={videoGame.id}
                    name={videoGame.name}
                    image={videoGame.image}
                    rating={videoGame.rating}
                    platforms={videoGame.platforms}
                    genres={videoGame.genres}
                 />
        })
      }
    </div>
  );
}

const mapStateToProps  = (state) => {
  return {
    myVideoGames:state.myVideoGames
  }
}

export default connect(mapStateToProps,null)(VideoGames);
