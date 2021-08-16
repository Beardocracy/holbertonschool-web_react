import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			enableSubmit: false,
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
	};

	handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  handleChangeEmail(event) {
    this.setState({ 
			email: event.target.value 
		}, () => {
      this.setState({
				enableSubmit: (this.state.email && this.state.password)
			});
			console.log(`Enable submit: ${this.state.enableSubmit}`);
    });
  };

  handleChangePassword (event) {
    this.setState({ 
			password: event.target.value 
		}, () => {
      this.setState({
				enableSubmit: (this.state.email && this.state.password)
			});
			console.log(`Enable submit: ${this.state.enableSubmit}`);
    });
  };

	render() {
		return (
			<div className={css(styles.appBody)}>
				<p className={css(styles.appBodyP)}>Login to access the full dashboard</p>
				<form className={css(styles.formStyle)} onSubmit={this.handleLoginSubmit}>
					<label className={css(styles.labelStyle)}>
					Email:
					<input className={css(styles.inputStyle)} type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
					</label>
					<label className={css(styles.labelStyle)}>
					Password
					<input className={css(styles.inputStyle)} type="text" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
					</label>
					<button type="submit" disabled={!this.state.enableSubmit}>OK</button>
				</form>
			</div>
		);
	};
};

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
		},
	},
});