/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:08:29

* Last updated on: 2023-07-17 20:08:29
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next-intl/link';

// import classes from './style.module.scss

const propTypes = {
	children: PropTypes.any,
	href: PropTypes.string,
	className: PropTypes.string,
};

const NavLink = (props) => {
	const { children, href, className, ...rest } = props;

	return (
		<Link href={href} {...rest} className={`py-2.5 px-4 text-center rounded-lg duration-150 ${className || ''}`}>
			{children}
		</Link>
	);
};

NavLink.propTypes = propTypes;

export default NavLink;
