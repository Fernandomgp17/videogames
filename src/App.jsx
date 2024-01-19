import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import DetailVideoGame from './components/DetailVideoGame/DetailVideoGame';
import FavoriteVideoGame from './components/FavoritesVideoGame/FavoriteVideoGame';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const {pathname} = useLocation();

  return (
    <div className='containerApp'>
      <div className='navBarContainer'>
        <NavBar/>
        {
          (pathname ==='/home') && ( 
          <div>
            <SearchBar/>
          </div>
          )
        }
      </div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/favorites' element={<FavoriteVideoGame/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<DetailVideoGame/>} />
      </Routes>
    </div>
  )
}

export default App
