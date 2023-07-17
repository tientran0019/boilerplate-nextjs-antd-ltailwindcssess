/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-16 22:43:13
*------------------------------------------------------- */

import 'antd/dist/reset.css';
import 'src/theme/globals.css';

import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from 'src/components/Layout/MainLayout';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const defaultProps = {
	children: {},
};

export const metadata = {
	title: 'Boilerplate',
	description: 'A boilerplate for Reactjs app using nextjs, redux, redux-thunk, antd, tailwind',
};

const RootLayout = (props) => {
	const { children } = props;

	return (
		<MainLayout>
			{children}
		</MainLayout>
	);
};

RootLayout.propTypes = propTypes;

RootLayout.defaultProps = defaultProps;

export default RootLayout;
