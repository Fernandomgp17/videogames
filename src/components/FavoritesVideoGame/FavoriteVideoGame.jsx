import React from 'react';
import { connect } from 'react-redux';
import VideoGame from '../VideoGame/VideoGame';
import styled from './FavoriteVideoGame.module.css';
import { filterVideoGame,orderVideoGame } from '../../redux/actions';

const FavoriteVideoGame = ({myFavoritesVideoGames,orderVideoGame,filterVideoGame}) => {

  const handleChange = (event) => {
    if(event.target.name==='order'){
      orderVideoGame(event.target.value)
    }else{
      filterVideoGame(event.target.value)
    }
  }

  return (
    <div className={styled.favoriteVideoGameContainer} >

      <select name='order' className={styled.favoriteOption} onClick={handleChange}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name='filter' onClick={handleChange}>
        <option value="Action">Action</option>
        <option value="Strategy">Strategy</option>
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Adventure">Adventure</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Racing">Racing</option>
        <option value="Sports">Sports</option>
      </select>
      <div className={styled.favoriteDates}>
        { 
          myFavoritesVideoGames?.map((myFavorite)=>{
            return <VideoGame
                    id={myFavorite.id}
                    key={myFavorite.id}
                    name={myFavorite.name}
                    image={myFavorite.image}
                    platforms={myFavorite.platforms}
                    genres={myFavorite.genres}
                  />
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
    orderVideoGame:(id)=>dispatch(orderVideoGame(id)),
    filterVideoGame:(gender)=>dispatch(filterVideoGame(gender))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteVideoGame);
