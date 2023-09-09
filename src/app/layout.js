/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-16 22:43:13
*------------------------------------------------------- */

import 'src/theme/globals.css';

// import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.any.isRequired,
};

// export const metadata = {
// 	title: 'Boilerplate',
// 	description: 'A boilerplate for Reactjs app using nextjs, zustand, antd, tailwind',
// };

const RootLayout = (props) => {
	const { children } = props;

	return children;
};

RootLayout.propTypes = propTypes;

export default RootLayout;
