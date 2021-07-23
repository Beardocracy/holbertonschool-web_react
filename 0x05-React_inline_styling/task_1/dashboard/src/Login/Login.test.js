const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test: Login Component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Login />);
    assert.strictEqual(wrapper.length, 1);
  });
  it('input: 2 tags rendered', () => {
    const wrapper = shallow(<Login />);
    assert(wrapper.find('input').length, 2);
  });
  it('label: 2 tags rendered', () => {
    const wrapper = shallow(<Login />);
    assert(wrapper.find('label').length, 2);
  });
});