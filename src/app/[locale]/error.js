/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-script-url */
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
import PropTypes from 'prop-types';

import { Button } from 'antd';

import { useRouter } from 'next-intl/client';
import { useTranslations } from 'next-intl';

// import classes from './style.module.scss

const propTypes = {
	reset: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
};

const Error = (props) => {
	const { error, reset = f => f } = props;
	const router = useRouter();
	const t = useTranslations('ErrorPage');

	React.useEffect(() => {
		// Log the error to an error reporting service
		console.log('DEV ~ file: error.js:39 ~ React.useEffect ~ error:', error);
	}, [error]);

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
					{error} Error
				</h3>
				<p className="text-gray-800 dark:text-gray-50 text-4xl font-semibold sm:text-5xl">
					{t('title')}
				</p>
				<p className="text-gray-800 dark:text-gray-50">
					{t.rich('description', {
						p: (chunks) => <p className="mt-4">{chunks}</p>,
						retry: (chunks) => (
							<button
								className="underline underline-offset-2"
								onClick={reset}
								type="button"
							>
								{chunks}
							</button>
						),
					})}
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3 pt-10">
					<Button
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
						type="primary"
					>
						Try again
					</Button>
					<Button onClick={() => router.push('/support')}>
						Contact support
					</Button>
				</div>
			</div>
		</div>
	);
};

Error.propTypes = propTypes;

export default Error;
