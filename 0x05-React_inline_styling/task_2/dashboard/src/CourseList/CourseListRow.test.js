import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test: CourseListRow Component', () => {
  
  it('Renders one cell when isHeader with colspan = 2 when !textSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell text' />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
    expect(wrapper.find('th').get(0).props.children).toEqual('first cell text');
  });

  it('Renders two cells when isHeader textSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell text' textSecondCell='second cell text' />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').get(0).props.children).toEqual('first cell text');
    expect(wrapper.find('th').get(1).props.children).toEqual('second cell text');
  });

  it('Renders 2 td and 2 tr elements when !isHeader', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='first cell text' textSecondCell='second cell text' />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('tr td')).toHaveLength(2);
  });

});