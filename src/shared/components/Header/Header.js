
import React from 'react';

import { Link } from 'react-router-dom';



//import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../../firebase/firebase.utils';

import './Header.styles.scss';



const Header = ({ currentUser }) => (

  <div className='header'>

    <Link className='logo-container' to='/'>

     <h3>1</h3>

    </Link>

    <div className='options'>

      <Link className='option' to='/shop'>

        SHOP

      </Link>

      <Link className='option' to='/shop'>

        CONTACT

      </Link>
      {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}> Log Out</div>:
          <Link className='option'  to='/auth'> Sign In</Link>
      }

    </div>

  </div>

);



export default Header;
// <Link className='option' to='/auth'> Log Out</Link>