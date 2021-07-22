import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { NotificationItem } from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, listNotifications }) => {
  
  function clickClose() {
		console.log('Close button has been clicked');
  };

  const buttonStyle = {
    border:'none',
    float:'right',
    backgroundColor:'transparent'
  }

  const latestNotification = {
    __html: getLatestNotification()
  };

  return (
    <React.Fragment>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
        <div className='Notifications'>
        {
          (displayDrawer == true) ?
            <React.Fragment>
              <p style={{ display: 'inline' }}>Here is the list of notifications</p>
              <button style={buttonStyle} aria-label="Close" onClick={clickClose}>
                <img src={icon} alt="" style={{ height:'1rem' }} />
              </button>
              <ul>
                {
                  listNotifications.length === 0 ? (
                    <NotificationItem type='default' value='No new notification for now' />
                    ) : (
                      listNotifications.map( ({ id, type, value, html }) => (
                        <NotificationItem key={id} type={type} value={value} html={html} />))
                        )
                      }
              </ul>
            </React.Fragment>
          : <p>No new notification for now</p>
        }      
        </div> 
    </React.Fragment>
  )
  
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;