import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead }) => {
  return (
    <li 
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
			onClick={markAsRead}
			className={type === 'default' ? css(styles.notifyDefault) : css(styles.notifyUrgent)}
    >
      {value}
    </li> 
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
	onClick: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
	onClick: () => {}
};

const styles = StyleSheet.create({
	notifyDefault: {
		color: 'blue',
	},
	notifyUrgent: {
		color: 'red',
	}
});

export default memo(NotificationItem);