import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="container">
      <div>
        <h1>MYSKILVUL</h1>
      </div>
      <div>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>courses</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
      <div>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Header;
