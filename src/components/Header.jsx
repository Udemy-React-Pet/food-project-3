import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='deep-orange darken-2'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React Food
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/about'>About</Link>
          </li>
					<li>
            <Link to='/contatcs'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;