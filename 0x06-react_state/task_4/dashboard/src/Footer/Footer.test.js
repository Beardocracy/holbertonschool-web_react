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

	it('verify that the Contact us link is not displayed when the user is logged out', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer p').length).toBe(1);
	});

  it('verify that the Contact us link is displayed when the user is logged in', () => {
    const value = { user: { email: 'userman@aol.com', password: 'password', isLoggedIn: true }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find('footer a').text()).toContain('Contact Us');
	});
});