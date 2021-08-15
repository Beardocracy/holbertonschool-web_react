const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

describe('Test: Footer Component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    assert.strictEqual(wrapper.length, 1);
  });
  it('Text `Copyright` is rendered', () => {
    const wrapper = shallow(<Footer />);
    assert(wrapper.find('p').text().includes('Copyright'), true);
  });
});