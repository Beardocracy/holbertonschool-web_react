import React, { Component } from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { NotificationItem } from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

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

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};

  render() {
		return (
			<React.Fragment>
				<div className='menuItem'>
					<p>Your notifications</p>
				</div>
				{this.props.displayDrawer && (
					<div className='Notifications'>
						{this.props.listNotifications.length > 0 ? (
							<React.Fragment>
								<p style={{ display: 'inline' }}>Here is the list of notifications</p>
								<button style={{ float: 'right' }} aria-label="Close" onClick={this.clickClose}>
									<img src={icon} alt="" style={{ height:'1rem' }} />
								</button>
								<ul>
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
						)	:  <p>No new notification for now</p>
					}	      
				</div> 

				)}
			</React.Fragment>
		)
	}
  
};