import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import logos from './Assets/PWSkills-logo.png';

const Header = () => {
  return (
    <>
        
      <div className='nav-items'>
      <div className='logo'>
          <img src={logos} alt='loogo' width='160px'></img>
        </div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <div className='btn'>
            <button>Sign Up</button>
        </div>
      </div>
  
    </>
  );
};

export default Header;