import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	rowStyle: {
		backgroundColor: '#f5f5f5ab',
	},
	headerRowStyle: {
		backgroundColor: '#deb5b545',
	}
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle)}>
      {isHeader && textSecondCell === null && (
        <th colSpan={2}>{textFirstCell}</th>
        )}
      {isHeader && textSecondCell !== null && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;