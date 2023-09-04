/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:23:48

* Last updated on: 2023-07-17 20:23:48
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import Link from 'next-intl/link';
import Newsletter from 'src/components/UIDisplay/Newsletter';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const navigation = [
	{ name: 'Features', href: '/#features' },
	{ name: 'Lessons', href: '/tutorials/cs50' },
	{ name: 'Pricing', href: '/#pricing' },
];

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className="pt-32 sm:pt-44">
			<div className="custom-screen text-gray-600 dark:text-gray-300">
				<Newsletter />
				<div className="mt-10 py-10 border-t dark:border-gray-800 flex-row-reverse items-center justify-between sm:flex">
					<ul className="flex flex-wrap items-center gap-4 sm:text-sm">
						{
							navigation.map((item, idx) => (
								<li key={idx} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-sky-500 duration-150 md:font-medium">
									<Link href={item.href}>
										{item.name}
									</Link>
								</li>
							))
						}
					</ul>
					<p className="mt-6 sm:mt-0">© 2023  IO Academy. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = propTypes;

export default Footer;
