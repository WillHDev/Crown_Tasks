
import React from 'react';

import { Link } from 'react-router-dom';



//import { ReactComponent as Logo } from '../../assets/crown.svg';



import './Header.styles.scss';



const Header = () => (

  <div className='header'>

    <Link className='logo-container' to='/'>

     <h1>Logo Goes Here</h1>

    </Link>

    <div className='options'>

      <Link className='option' to='/shop'>

        SHOP

      </Link>

      <Link className='option' to='/shop'>

        CONTACT

      </Link>

    </div>

  </div>

);



export default Header;