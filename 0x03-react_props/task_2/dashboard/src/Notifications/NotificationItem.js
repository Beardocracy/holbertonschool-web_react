import React from 'react';
import './NotificationItem.css';


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

export { NotificationItem };