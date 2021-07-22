import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('Renders correctly', () => {
		const wrapper = shallow(
			<BodySection title="title test">
				<p>child test</p>
			</BodySection>
		);
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('h2').length).toEqual(1);
		expect(wrapper.find('h2').text()).toEqual('title test');
		expect(wrapper.find('p').length).toEqual(1);
		expect(wrapper.find('p').text()).toEqual('child test');
	});
});