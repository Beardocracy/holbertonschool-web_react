import React, { Component } from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	
	static defaultProps = {
		displayDrawer: false,
		listNotifications: [],
		handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
	};
	static propTypes = {
		displayDrawer: PropTypes.bool,
		listNotifications: PropTypes.arrayOf(NotificationItemShape),
		handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
	};
  
	
  clickClose() {
		console.log('Close button has been clicked');
  };
	
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer != this.props.displayDrawer)
			return true;
  	return false;
  };
	
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};

	notificationsToggler() { return this.props.displayDrawer ? true : false; }
	
  render() {
		const notificationTogglerClass = css(
			styles.menuItem,
			this.notificationsToggler() && styles.doNotDisplay
		)

		return (
			<React.Fragment>
				<div className={notificationTogglerClass}>
					<p>Your notifications</p>
				</div>
				{this.props.displayDrawer && (
					<div className={css(styles.notificationsStyle)}>
						<div className='Notifications'>
							{this.props.listNotifications.length > 0 ? (
								<React.Fragment>
									<p style={{ display: 'inline' }}>Here is the list of notifications</p>
									<button style={{ float: 'right' }} aria-label="Close" onClick={this.clickClose}>
										<img src={icon} alt="" style={{ height:'1rem' }} />
									</button>
									<ul className={css(styles.listStyle)}>
										{ this.props.listNotifications.map( ({ id, type, value, html }) => (
											<NotificationItem 
											key={id}
											type={type}
											value={value}
											html={html}
											markAsRead={() => {this.markAsRead(id)}}
											/>
											))
										}
									</ul>
								</React.Fragment>
								)	: <p>No new notification for now</p>
							}
						</div>
					</div>
				)}
			</React.Fragment>
		)
	}
};

const opacityFrames = {
	from: {
		opacity: 0.5,
	},
	to: {
		opacity: 1,
	},
};

const translateFrames = {
	"0%": {
		transform: "translateY(0)",
	},
	"50%": {
		transform: "translateY(-5px)",
	},
	"100%": {
		transform: "translateY(5px)",
	},
};

const styles = StyleSheet.create({
	notificationsStyle: {
		border: '2px red dashed',
		padding: '1rem',
		float: 'right',
		'@media (max-width: 900px)': {
      border: 'none',
      height: '100vh',
      width: '100vw',
      float: 'none',
      padding: 0,
      fontSize: 20,
    },
	},

	menuItem: {
		display: 'flex',
		justifyContent: 'flex-end',
		float: 'right',
		'@media (max-width: 900px)': {
      display: 'none',
		},
		backgroundColor: '#fff8f8',
		':hover': {
      cursor: 'pointer',
      animationName: [opacityFrames, translateFrames],
      animationDuration: '1s, 500ms',
      animationIterationCount: '3',
    },
	},

	listStyle: {
    listStyle: 'none',
    padding: 0
  },

	doNotDisplay: {
		display: 'none',
	}

});
