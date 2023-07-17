/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 11:24:05

* Last updated on: 2023-07-17 11:24:05
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import Course from 'src/components/UIDisplay/Course';
import CTA from 'src/components/UIDisplay/CTA';
import Features from 'src/components/UIDisplay/Features';
import Hero from 'src/components/UIDisplay/Hero';
import Pricing from 'src/components/UIDisplay/Pricing';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Home = (props) => {
	// const { } = props;

	return (
		<>
			<Hero />
			<CTA />
			<Features />
			<Course />
			<Pricing />
		</>
	);
};

Home.propTypes = propTypes;

Home.defaultProps = defaultProps;

export default Home;
