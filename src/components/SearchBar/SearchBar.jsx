import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addVideoGame } from '../../redux/actions';
import styled from './SearchBar.module.css';

const SearchBar = ({addVideoGame}) => {

  const [id,setId] = useState('');

  const handleClick = () => {
    addVideoGame(id)
    setId('')
  }

  const handleChange = (event) => {
    setId(event.target.value);
  }

  return (
    <div className={styled.searchBarContainer}>
      <input type="text" onChange={handleChange} value={id} />    
      <button onClick={handleClick}>Find</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addVideoGame:(id)=>{dispatch(addVideoGame(id))}
  }
}

export default connect(null,mapDispatchToProps)(SearchBar);
