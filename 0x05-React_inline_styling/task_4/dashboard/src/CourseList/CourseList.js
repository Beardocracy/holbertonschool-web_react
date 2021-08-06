import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseListStyle)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {
          listCourses.length === 0 ? (
          <CourseListRow textFirstCell='No course available yet' />
          ) : (
            listCourses.map( ({ id, name, credit }) => (
              <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
            ))
          )
        }
      </tbody>
    </table> 
  );
};

CourseList.defaultProps = {
  listCourses: []
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

const styles = StyleSheet.create({
  courseListStyle: {
    width: '90%',
    margin: '30px auto 200px auto',
    minHeight: 125,
    border: '1px solid grey',
  }
})

export default CourseList;