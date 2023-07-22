/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 19:48:01

* Last updated on: 2023-07-17 19:48:01
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

// import classes from './style.module.scss

const propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
};

const SectionWrapper = (props) => {
	const { children, className, ...rest } = props;

	return (
		<section {...rest} className={`py-16 sm:py-28 ${className || ''}`}>
			{children}
		</section>
	);
};

SectionWrapper.propTypes = propTypes;

export default SectionWrapper;
