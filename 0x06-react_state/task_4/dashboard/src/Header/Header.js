import React, { Component } from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext";

export default class Header extends Component {
  render() {
		let value = this.context;
		return (
			<>
				<header className={css(styles.appHeader)}>
					<img src={logo} className={css(styles.appLogo)} alt="logo" />
					<h1 className={css(styles.appH1)}>School dashboard</h1>
				</header>
				{isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a onClick={logOut} className={css(styles.link)}>Log out</a>)
          </p>
				)}
			</>
		);
	};
};

Header.contextType = AppContext;

const styles = StyleSheet.create({
  appLogo: {
    height: '100%'
  },
	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '25vh',
		color: '#E0354B'
	},
	appH1: {
		fontSize: '2.3rem'
	}
})