import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';

const App = ({ isLoggedIn }) => {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <hr />
      {isLoggedIn ? <CourseList /> : <Login />}
      <hr />
      <Footer />
    </React.Fragment>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;