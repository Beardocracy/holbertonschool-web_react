import React, { PureComponent } from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default class Notifications extends PureComponent {
	constructor(props) {
		super(props);
	}
	
	static propTypes = {
		displayDrawer: PropTypes.bool,
		listNotifications: PropTypes.arrayOf(NotificationItemShape),
		handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
	};
  
	static defaultProps = {
		displayDrawer: false,
		listNotifications: [],
		handleDisplayDrawer: () => {},
		handleHideDrawer: () => {},
		markNotificationAsRead: () => {},
	};
	
  clickClose() {
		console.log('Close button has been clicked');
  };
	
	notificationsToggler() { return this.props.displayDrawer ? true : false; }
	
  render() {
		const notificationTogglerClass = css(
			styles.menuItem,
			this.notificationsToggler() && styles.doNotDisplay
		)
		const {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer
		} = this.props;

		return (
			<React.Fragment>
				<div className={notificationTogglerClass} onClick={handleDisplayDrawer}>
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.notificationsStyle)}>
						<div className='Notifications'>
							{listNotifications.length > 0 ? (
								<React.Fragment>
									<p style={{ display: 'inline' }}>Here is the list of notifications</p>
									<button style={{ float: 'right' }} aria-label="Close" onClick={handleHideDrawer}>
										<img src={icon} alt="" style={{ height:'1rem' }} />
									</button>
									<ul className={css(styles.listStyle)}>
										{ listNotifications.map( ({ id, type, value, html }) => (
											<NotificationItem 
											key={id}
											type={type}
											value={value}
											html={html}
											markNotificationAsRead={() => {
												this.props.markNotificationAsRead(notification.id)
											}}
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
