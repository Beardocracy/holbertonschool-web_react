/**
 * @jest-environment jsdom
 */
const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

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

	it('mounts a <Header /> component with user defined and verifies that logoutSection is created', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});

  it('mounts a <Header /> component with user defined and verifies that clicking logout link calls logOut()', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const spy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection a').simulate('click');
    expect(spy).toHaveBeenCalled();
	});
});