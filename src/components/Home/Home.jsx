import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoGames from '../VideoGames/VideoGames';
import styled from './Home.module.css';

const Home = () => {

  return (
    <div className={styled.homeContainer} >
      <VideoGames/>
    </div>
  );
}



export default Home;
