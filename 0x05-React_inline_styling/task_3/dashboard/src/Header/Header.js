import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => (
  <header className={css(styles.appHeader)}>
    <img src={logo} className={css(styles.appLogo)} alt="logo" />
    <h1 className={css(styles.appH1)}>School dashboard</h1>
  </header>
)

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

export default Header;