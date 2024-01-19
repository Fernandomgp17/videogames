import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import styled from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styled.containerNavBar} >
      <NavLink to='/about' >
        <button className='link1'>About</button>
      </NavLink>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/favorites'>
        <button>Favorite</button>
      </Link>
    </div>
  );
}

export default NavBar;
