import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('Test: CourseList Component', () => {
  
  it('Renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('Renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

});