import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';


describe('<BodySectionWithMarginBottom />', () => {
  it('Renders correctly', () => {
		const wrapper = shallow(
			<BodySectionWithMarginBottom title="title test">
				<p>child test</p>
			</BodySectionWithMarginBottom>
		);
		expect(wrapper.find(BodySection).length).toEqual(1);
		expect(wrapper.find(BodySection).props().title).toEqual('title test');
		expect(wrapper.find(BodySection).props().children.type).toEqual('p');
		expect(wrapper.find(BodySection).props().children.props.children).toEqual('child test');
	});
});