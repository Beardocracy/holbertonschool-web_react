const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import  NotificationItem  from './NotificationItem.js';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test: NotificationItem Component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    assert.strictEqual(wrapper.length, 1);
  });
  it('Renders with dummy Type and Value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value={'test'} />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.text()).toEqual('test');
  });
  it('Renders with dummy HTML prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});