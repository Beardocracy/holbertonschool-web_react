const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('Test: App Component', () => {

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

});