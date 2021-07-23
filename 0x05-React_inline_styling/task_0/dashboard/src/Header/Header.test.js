const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Test: Header Component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Header />);
    assert.strictEqual(wrapper.length, 1);
  });
  it('img: component renders', () => {
    const wrapper = shallow(<Header />);
    assert(wrapper.find('img').length, 1);
  });
  it('h1: component renders', () => {
    const wrapper = shallow(<Header />);
    assert(wrapper.find('h1').length, 1);
  });
});