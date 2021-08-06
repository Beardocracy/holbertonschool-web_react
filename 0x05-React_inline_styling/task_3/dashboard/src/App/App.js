import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import BodySection from "../BodySection/BodySection.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import { getLatestNotification } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';


export default class App extends Component  {
  constructor(props) { 
	  super(props);
}
  
  static propTypes = {
    isLoggedIn: PropTypes.bool,
		logOut: PropTypes.func
  };
  
  static defaultProps = {
    isLoggedIn: false,
		logOut: () => {}
  };

	logoutHandler = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
  	document.addEventListener('keydown', this.logoutHandler);
  };
  componentWillUnmount() {
  	document.removeEventListener('keydown', this.logoutHandler);
  };

  render() {
    const listCourses = [
      {id: 1, credit: 60, name: 'ES6'},
      {id: 2, credit: 20, name: 'Webpack'},
      {id: 3, credit: 40, name: 'React'},
    ];
  
    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ];
  
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
        <Header />
        <hr className={css(styles.hr)}/>
        {this.props.isLoggedIn ? (
					<BodySectionWithMarginBottom title='Course list'>
						<CourseList listCourses={listCourses} />
					</BodySectionWithMarginBottom>
				) : (
					<BodySectionWithMarginBottom title='Login'>
						<Login />
					</BodySectionWithMarginBottom>
				)}
				<BodySection title='News from the School'>
					<p>Travis says he's going to catch up.</p>
				</BodySection>
        <hr className={css(styles.hr)}/>
        <Footer className={css(styles.footer)}/>
      </React.Fragment>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },

  hr: {
		backgroundColor: '#E0354B',
  	height: '.2rem',
  	margin: '0'
  },

  footer: {
    maxHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic'
  },
})