import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => (
  <div className={css(styles.appBody)}>
    <p className={css(styles.appBodyP)} >Login to access the full dashboard</p>
    <form className={css(styles.formStyle)}>
      <label className={css(styles.labelStyle)}>
      Email:
      <input className={css(styles.inputStyle)} type="text" name="email"/>
      </label>
      <label className={css(styles.labelStyle)}>
      Password
      <input className={css(styles.inputStyle)} type="text" name="password"/>
      </label>
      <button>OK</button>
    </form>
  </div>
)

const styles = StyleSheet.create({
  appBody: {
    minHeight: 200,
		margin: '40px auto 200px auto',
		'@media (max-width: 900px)': {
			minHeight: 0,
			margin: 0,
		}
  },
	appBodyP: {
		margin: '3rem 0rem 1rem 2rem'
	},
	inputStyle: {
		margin: '0 1rem 0 1rem'
	},
	formStyle: {
		marginLeft: '2rem',
	},
	labelStyle: {
		'@media (max-width:900px)': {
			display: 'block',
		}
	}
})

export default Login;