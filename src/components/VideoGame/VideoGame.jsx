import React, { useEffect, useState } from 'react';
import styled from './VideoGame.module.css';
import { addMyFavoriteVideoGame, removeVideoGame,removeFavoriteVideoGame } from '../../redux/actions';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


const VideoGame = ({id,name,image,platforms,genres,removeVideoGame,myFavoritesVideoGames,addFavoriteVideoGame,removeFavoriteVideoGame}) => {

  const [isFav,setIsFav] = useState(false);
  const {pathname} = useLocation();


  const handleClickClose = () => {
    removeVideoGame(id)
  }

  const handleClickFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFavoriteVideoGame(id)
    }else{
      setIsFav(true)
      addFavoriteVideoGame({id,name,image,platforms,genres})
    }
  }

  useEffect(()=>{
    myFavoritesVideoGames?.forEach((favorite)=>{
      if(favorite.id===id){
        setIsFav(true)
      }
    })
  },[myFavoritesVideoGames])

  return (
    <div className={styled.videogameContainer}>
      <div className={styled.titleVideoGame} >
        {
          isFav ===true ?(
            <button className={styled.buttonTitleLeft} onClick={handleClickFavorite} >💖</button>
          ):(
            <button className={styled.buttonTitleLeft} onClick={handleClickFavorite} >🤍</button>
          )
        }
        <Link to={`/detail/${id}`}>
          <h2 className={styled.titleVideoGame}>{name}</h2>
        </Link>
        {
          (pathname==='/home')&&(<button className={styled.buttonTitleRight} onClick={handleClickClose}>X</button>)
        }
      </div>
      <img className={styled.imageVideoGame} src={image} alt="" />
      <h2 className={styled.platformsTitle} >Platforms:</h2>
      <div className={styled.platformsVideoGame} >
        {
          platforms.map((plat,indice)=>{
            return <p key={indice} >
                    {'💥'+plat}
                   </p>
          })
        }
      </div>
      <h2 className={styled.genresTitle} >Genres:</h2>
      <div className={styled.genresVideoGame} >
        {
          genres.map((genre,indice)=>{
            return <p key={indice} >
                      {'➰ '+genre}
                    </p>
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavoritesVideoGames:state.myFavoritesVideoGames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeVideoGame:(id)=>dispatch(removeVideoGame(id)),
    addFavoriteVideoGame: (id)=>dispatch(addMyFavoriteVideoGame(id)),
    removeFavoriteVideoGame: (id) =>dispatch(removeFavoriteVideoGame(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoGame);
