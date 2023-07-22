/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 17:56:03

* Last updated on: 2023-07-17 17:56:03
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

// import classes from './style.module.scss

const propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
};

const PlayListButton = (props) => {
	const { className, isOpen, ...rest } = props;

	return (
		<Button
			aria-label="Play list button"
			className={`${className || ''} w-full flex items-center gap-x-3 py-4 text-left text-gray-700 dark:text-gray-50 font-medium lg:hidden`}
			type="primary"
			{...rest}
		>
			{
				isOpen ? (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
					</svg>

				) : (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
					</svg>
				)
			}
			Course playlist
		</Button>
	);
};

PlayListButton.propTypes = propTypes;

export default PlayListButton;
