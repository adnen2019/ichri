import React from 'react';
import Directory from '../../components/directory/Directory'
import './Home.scss';

const Home = () => (
  <div className='homepage'>
    <h1>Welcome to Shopya</h1>
    <Directory />
  </div>
);

export default Home;