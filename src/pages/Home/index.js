import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div><h1>Home</h1></div>
      <div><Link to="/signup">Signup</Link></div>
    </div>
  );
}

export default Home;