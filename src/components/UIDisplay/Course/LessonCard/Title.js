/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:46:13

* Last updated on: 2023-07-17 20:46:13
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

const SubTitle = (props) => {
	const { children, className, ...rest } = props;

	return (
		<h3 {...rest} className={`${className || ''} block text-gray-800 dark:text-gray-50 text-lg font-medium`}>{children}</h3>
	);
};

SubTitle.propTypes = propTypes;

export default SubTitle;
