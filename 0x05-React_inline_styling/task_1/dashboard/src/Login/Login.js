import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => (
  <div className={css(styles.appBody)}>
    <p className={css(styles.appBodyP)} >Login to access the full dashboard</p>
    <form className={css(styles.formStyle)}>
      <label>
      Email:
      <input className={css(styles.inputStyle)} type="text" name="email"/>
      </label>
      <label>
      Password
      <input className={css(styles.inputStyle)} type="text" name="password"/>
      </label>
      <button>OK</button>
    </form>
  </div>
)

const styles = StyleSheet.create({
  appBody: {
    height: '60vh'
  },
	appBodyP: {
		margin: '3rem 0rem 1rem 2rem'
	},
	inputStyle: {
		margin: '0 1rem 0 1rem'
	},
	formStyle: {
		marginLeft: '2rem'
	}
})

export default Login;