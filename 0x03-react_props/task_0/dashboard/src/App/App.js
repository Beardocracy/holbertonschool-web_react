import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <hr />
      <Login />
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;