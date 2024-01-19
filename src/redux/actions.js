import { ADD_VIDEOGAME,REMOVE_VIDEOGAME,ADD_FAVORITE_VIDEOGAME, REMOVE_FAVORITE_VIDEOGAME, FILTER_VIDEOGAME,ORDER_VIDEOGAME } from "./action-types";
import axios from "axios";

const addVideoGame = (id) => {
  return (dispatch)=>{
    axios.get(`https://api.rawg.io/api/games/${id}?key=0e518a5dbd8e491cac6f930bb12d3c39`)
    .then(response=>response.data)
    .then(data=>{
      const id = data.id
      const name = data.name
      const image = data.background_image
      const rating = data.rating
      const platforms = data.platforms?.map((plat)=>plat.platform.name)
      const genres = data.genres?.map((genre)=>genre.name)
      return dispatch({type:ADD_VIDEOGAME,payload:{id,name,image,rating,platforms,genres}})
    })
  }
}

const removeVideoGame = (id) => {
  return {type:REMOVE_VIDEOGAME,payload:id}
} 

const addMyFavoriteVideoGame = (character) => {
  return {type:ADD_FAVORITE_VIDEOGAME,payload:character}
}

const removeFavoriteVideoGame = (id) => {
  return {type:REMOVE_FAVORITE_VIDEOGAME,payload:id}
}

const filterVideoGame = (gender) => {
  return {type:FILTER_VIDEOGAME,payload:gender}
}

const orderVideoGame = (id) => {
  return {type:ORDER_VIDEOGAME,payload:id}
}

export {addVideoGame,removeVideoGame,addMyFavoriteVideoGame,removeFavoriteVideoGame,filterVideoGame,orderVideoGame};