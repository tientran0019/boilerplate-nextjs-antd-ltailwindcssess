/* eslint-disable jsx-a11y/label-has-associated-control */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:26:38

* Last updated on: 2023-07-17 16:26:38
* Last updated by: Tien Tran
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { getMetadata } from 'src/constants/metadata';

import LoginContainer from './_components/LoginPage';

// import classes from './style.module.scss

export async function generateMetadata(props) {
	const { params: { locale } = {} } = props;

	const meta = await getMetadata({
		locale,
		namespace: 'LoginPage.Metadata',
	});

	return meta;
}

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const LoginPage = (props) => {
	// const { } = props;

	return (
		<LoginContainer {...props} />
	);
};

LoginPage.propTypes = propTypes;

export default LoginPage;
