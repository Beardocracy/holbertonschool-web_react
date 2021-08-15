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
		this.handleKeydown = this.logoutHandler.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.state = { displayDrawer: false };
	};

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
			this.handleHideDrawer();
    }
  };
	
  componentDidMount() {
		document.addEventListener('keydown', this.logoutHandler);
  };
  componentWillUnmount() {
		document.removeEventListener('keydown', this.logoutHandler);
  };
	
	handleDisplayDrawer() { this.setState({ displayDrawer: true }); };
	handleHideDrawer() { this.setState({ displayDrawer: false }); };

  render() {
    const { displayDrawer } = this.state;
		const { isLoggedIn } = this.props;
		
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
        <Notifications 
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
				/>
        <Header />
        <hr className={css(styles.hr)}/>
        {isLoggedIn ? (
					<BodySectionWithMarginBottom title='Course list'>
						<CourseList listCourses={listCourses} />
					</BodySectionWithMarginBottom>
				) : (
					<BodySectionWithMarginBottom title='Log in to continue'>
						<Login />
					</BodySectionWithMarginBottom>
				)}
				<BodySection title='News from the School'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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