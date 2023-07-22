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
	const { children, className } = props;

	return (
		<span className={`${className || ''} text-blue-600 dark:text-sky-500 font-semibold`}>{children}</span>
	);
};

SubTitle.propTypes = propTypes;

export default SubTitle;
