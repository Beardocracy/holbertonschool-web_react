/**
 * @jest-environment jsdom
 */
import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
 
 describe('Test WithLogging', () => {
	let wrapperShallow = null;
	let wrapperMount = null;
	let mockedConsoleLog = null;
	let LoggingComponent = WithLogging(() => <p />);
 
	beforeEach(() => {
		LoggingComponent = WithLogging(() => <p />);
		wrapperShallow = shallow(<LoggingComponent />);
		wrapperMount = mount(<LoggingComponent />);
		mockedConsoleLog = console.log = jest.fn();
	})
	 
	afterEach(() => {
		wrapperShallow = wrapperMount = null;
	})

	it('Tests whether WithLogging', () => {
		assert.strictEqual(wrapperShallow.length, 1);
	});

	it('Tests mount and unmount', () => {
		expect(mockedConsoleLog).toHaveBeenCalledTimes(2);
	})
})