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

import { useSession } from 'next-auth/react';
import React from 'react';
// import PropTypes from 'prop-types';

import Course from 'src/components/UIDisplay/Course';
import CTA from 'src/components/UIDisplay/CTA';
import Features from 'src/components/UIDisplay/Features';
import Hero from 'src/components/UIDisplay/Hero';
import Pricing from 'src/components/UIDisplay/Pricing';

import useAuthStore, { actionGetProfile } from 'src/store/auth';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Home = (props) => {
	// const { } = props;

	const session = useSession({
		required: true,
		onUnauthenticated() {
			// The user is not authenticated, handle it here.
			console.log('=====1', 111);
		},
	});
	console.log('DEV ~ file: Container.js:37 ~ LoginContainer ~ session:', session);
	const auth = useAuthStore();
	console.log('DEV ~ file: Container.js:35 ~ LoginContainer ~ auth:', auth);

	React.useEffect(() => {
		if (session.status === 'authenticated') {
			actionGetProfile();
		}
	}, [session.status]);

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

export default Home;
