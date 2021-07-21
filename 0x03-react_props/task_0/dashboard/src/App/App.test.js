import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {

    it('App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    // it('App renders a div with the class App-header', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('header.App-header')).toHaveLength(1);
    // });

    // it('App renders a div with the class App-body', () => {
    //         const wrapper = shallow(<App />);
    //     expect(wrapper.find('div.App-body')).toHaveLength(1);
    // });

    // it('App renders a div with the class App-footer', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('div.App-footer')).toHaveLength(1);
    // });

});