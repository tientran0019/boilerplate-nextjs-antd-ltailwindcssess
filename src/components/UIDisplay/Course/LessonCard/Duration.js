/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:41:16

* Last updated on: 2023-07-17 20:41:16
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

const Duration = (props) => {
	const { children, className, ...rest } = props;

	return (
		<span {...rest} className={`text-sm text-gray-700 dark:text-gray-400 font-semibold ${className || ''}`}>{children}</span>
	);
};

Duration.propTypes = propTypes;

export default Duration;
