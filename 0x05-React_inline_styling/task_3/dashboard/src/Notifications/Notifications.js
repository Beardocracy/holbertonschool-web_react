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
	};
	static propTypes = {
		displayDrawer: PropTypes.bool,
		listNotifications: PropTypes.arrayOf(NotificationItemShape),
	};
  
	
  clickClose() {
		console.log('Close button has been clicked');
  };
	
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.listNotifications.length > this.props.listNotifications.length)
		return true;
  	return false;
  }
	
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};
	
  render() {
		return (
			<React.Fragment>
				<div className={css(styles.menuItem)}>
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
		'@media (max-width: 900px)': {
      display: 'none',
		},
	},

	listStyle: {
    listStyle: 'none',
    padding: 0
  },

});