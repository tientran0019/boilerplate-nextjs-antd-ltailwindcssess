/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:38:57

* Last updated on: 2023-07-17 16:38:57
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import { getMetadata } from 'src/constants/metadata';

import TutorialPage from './_components/TutorialPage';

export async function generateMetadata(props) {
	const { params: { locale } = {} } = props;

	// const res = await fetchApi({
	// 	url: '/auth/profile',
	// });
	// console.log('DEV ~ file: page.js:30 ~ generateMetadata ~ res:', res);

	const meta = await getMetadata({
		locale,
		namespace: 'LessonsPage.Metadata',
	});

	return meta;
}

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Tutorial = (props) => {
	// const { } = props;

	return (
		<TutorialPage />
	);
};

Tutorial.propTypes = propTypes;

export default Tutorial;
