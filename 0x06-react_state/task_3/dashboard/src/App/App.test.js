/**
 * @jest-environment jsdom
 */

const assert = require('assert');
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const userMan = { email: 'userman@aol.com', password: 'password', isLoggedIn: true };

describe('<App />', () => {

    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        assert.strictEqual(wrapper.length, 1);
    });
    it('Contains Notifications component', () => {
      const wrapper = shallow(<App />);
      assert.strictEqual(wrapper.find('Notifications').exists(), true);
    });
    it('Contains Header component', () => {
      const wrapper = shallow(<App />);
      assert.strictEqual(wrapper.find('Header').exists(), true);
    });
    it('Contains Login component', () => {
      const wrapper = shallow(<App />);
      assert.strictEqual(wrapper.find('Login').exists(), true);
    });
    it('Contains Footer component', () => {
      const wrapper = shallow(<App />);
      assert.strictEqual(wrapper.find('Footer').exists(), true);
    });
    it('CourseList not rendered without logged in', () => {
      const wrapper = shallow(<App />);
      assert.strictEqual(wrapper.find('CourseList').length, 0);
    });
    it('When logged in, CourseList is rendered and Login is not', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      assert.strictEqual(wrapper.find('CourseList').length, 1);
      assert.strictEqual(wrapper.find('Login').length, 0);
    });

		// it("checks behavior of logOut prop", () => {
		// 	const map = {};
		//  	window.addEventListener = jest.fn().mockImplementation((event, cb) => {
		//  		map[event] = cb;
		//  	});
		//  	window.alert = jest.fn();
	
		//  	const testProps = {
		//  		logOut: jest.fn()
		//  	}
	
		//  	const wrapper = mount(<App isLoggedIn={true} {...testProps}/>);
		//  	map.keydown({ ctrlKey: true, key: "h" });
		//  	expect(window.alert).toHaveBeenCalledWith("Logging you out");
		//  	expect(testProps.logOut).toHaveBeenCalled();
		//  	window.alert.mockRestore();
		//  });

		it("verifies the default state for displayDrawer is false", () => {
			const wrapper = shallow(<App />);
			expect(wrapper.state().displayDrawer).toBe(false);
		});

		it("verifies that after calling handleDisplayDrawer, the state is true", () => {
			const wrapper = shallow(<App />);
			wrapper.instance().handleDisplayDrawer();
			expect(wrapper.state().displayDrawer).toBe(true);
		});

		it("verifies that after calling handleHideDrawer, the state is false", () => {
			const wrapper = shallow(<App />);
			wrapper.setState({ displayDrawer: true });
			wrapper.instance().handleHideDrawer();
			expect(wrapper.state().displayDrawer).toBe(false);
		});

		it("verifies that the logIn function updates the state correctly", () => {
			const wrapper = shallow(<App />);
			wrapper.instance().logIn(userMan.email, userMan.password);
			expect(wrapper.state().user.email).toBe('userman@aol.com');
			expect(wrapper.state().user.password).toBe('password');
			expect(wrapper.state().user.isLoggedIn).toBe(true);
		});
	
		it("verifies that the logOut function updates the state correctly", () => {
			const wrapper = shallow(<App />);
			wrapper.setState({ user: userMan });
			wrapper.state().logOut();
			expect(wrapper.state().user.email).toBe('');
			expect(wrapper.state().user.password).toBe('');
			expect(wrapper.state().user.isLoggedIn).toBe(false);
		});
});