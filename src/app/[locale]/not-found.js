/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 10:32:37

* Last updated on: 2023-07-17 10:32:37
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import { Button } from 'antd';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

const propTypes = {
	// reset: PropTypes.func.isRequired,
};

const NotFoundPage = (props) => {
	const t = useTranslations('NotFoundPage');

	return (
		<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
			<div
				className="blur-[138px] absolute inset-0 m-auto max-w-7xl h-[230px]"
				style={{
					background:
						'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
				}}
			/>
			<div className="max-w-lg mx-auto space-y-5 text-center">
				<h3 className="text-indigo-600 font-semibold">
					404 Error
				</h3>
				<p className="text-gray-800 dark:text-gray-50 text-4xl font-semibold sm:text-5xl">
					{t('title')}
				</p>
				<p className="text-gray-800 dark:text-gray-50">
					{t('text')}
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3 pt-10">
					<Link href="/">
						<Button type="primary">
							{t('btnPrimary')}
						</Button>
					</Link>
					<Link href="/support">
						<Button>
							{t('btnSecondary')}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
