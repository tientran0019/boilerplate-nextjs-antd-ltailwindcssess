/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 19:45:32

* Last updated on: 2023-07-17 19:45:32
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'src/components/Layout/Footer';
import Navbar from 'src/components/Layout/Navbar';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const RootLayout = (props) => {
	const { children } = props;

	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

RootLayout.propTypes = propTypes;

export default RootLayout;
