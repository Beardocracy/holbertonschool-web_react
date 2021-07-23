import React from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = (props) => {
	return (
		<div className='bodySectionWithMargin'>
			<BodySection {...props}/>
		</div>
	);
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element
};

export default BodySectionWithMarginBottom