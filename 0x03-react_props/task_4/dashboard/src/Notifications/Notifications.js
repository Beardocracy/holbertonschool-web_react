import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  
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
      {
        (displayDrawer == true) ?
          <div className='Notifications'>
          <p style={{ display: 'inline' }}>Here is the list of notifications</p>
          <button style={buttonStyle} aria-label="Close" onClick={clickClose}>
            <img src={icon} alt="" style={{ height:'1rem' }} />
          </button>
          <ul>
            <NotificationItem
              type="default"
              value={'New course available'}
              />
            <NotificationItem
              type="urgent"
              value={'New resume available'}
              />
            <NotificationItem
              type="urgent"
              html={latestNotification}
              />
          </ul>
        </div> : null
      }      
    </React.Fragment>
  )
  
};

Notifications.defaultProps = {
  displayDrawer: false,
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}
export default Notifications;