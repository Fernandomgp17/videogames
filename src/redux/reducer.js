import { ADD_VIDEOGAME,REMOVE_VIDEOGAME,ADD_FAVORITE_VIDEOGAME,REMOVE_FAVORITE_VIDEOGAME,FILTER_VIDEOGAME,ORDER_VIDEOGAME } from "./action-types";

const initialState = {
  myVideoGames:[],
  myFavoritesVideoGames:[],
  allMyFavoritesVideoGames:[]
}

const reducer = (state=initialState,{type,payload}) => {
  switch(type){

    case ADD_VIDEOGAME:
      return {
        ...state,
        myVideoGames:[...state.myVideoGames,payload]
      }

    case REMOVE_VIDEOGAME:
      return{
        ...state,
        myVideoGames:state.myVideoGames.filter((myVideoGame)=>myVideoGame.id!==payload),
        myFavoritesVideoGames:state.myFavoritesVideoGames.filter((myFavorite)=>myFavorite.id!==payload)
      }
    
    case ADD_FAVORITE_VIDEOGAME:
      return {
        ...state,
        myFavoritesVideoGames:[...state.allMyFavoritesVideoGames,payload],
        allMyFavoritesVideoGames:[...state.allMyFavoritesVideoGames,payload]
      }
    case REMOVE_FAVORITE_VIDEOGAME:
      return {
        ...state,
        myFavoritesVideoGames:state.myFavoritesVideoGames.filter((myFavorite)=>myFavorite.id!==payload)
      }
    case FILTER_VIDEOGAME:
      const filterByGender = [...state.allMyFavoritesVideoGames].filter((favorite)=>{
        return favorite.genres?.includes(payload)
      })

      return {
        ...state,
        myFavoritesVideoGames:filterByGender
      }
    
    case ORDER_VIDEOGAME:
      const favoriteOrdered = payload === 'A' 
      ? [...state.allMyFavoritesVideoGames].sort((a,b)=>a.id-b.id)
      : [...state.allMyFavoritesVideoGames].sort((a,b)=>b.id-a.id)

      return {
        ...state,
        myFavoritesVideoGames:favoriteOrdered
      }

    default:
      return{
        ...state
      }
  }
}

export default reducer;