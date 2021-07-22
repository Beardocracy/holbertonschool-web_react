import React from 'react';
import './NotificationItem.css';
import PropTypes from 'prop-types';


function NotificationItem({ type, html, value }) {
  return (
    <li 
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    >
      {value}
    </li> 
  );
}

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['default', 'urgent']),
  html: PropTypes.exact({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string
}

NotificationItem.defaultProps = {
  type: 'default'
}

export { NotificationItem };