import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='page-footer deep-orange darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <Link
            className='deep-orange-text text-lighten-5 right'
            to='https://github.com/Udemy-React-Pet/food-project-3'
          >
            Repo
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
