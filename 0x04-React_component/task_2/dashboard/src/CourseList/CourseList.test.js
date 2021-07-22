import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
	{id: 1, name: 'ES6', credit: 60},
	{id: 2, name: 'Webpack', credit: 20},
	{id: 3, name: 'React', credit: 40},
];

describe('Test: CourseList Component', () => {
  
  it('Renders without crashing without elements', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders without crashing with elements', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renders without crashing with empty array', () => {
    const wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('Renders 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

});