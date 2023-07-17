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

import RootLayout from 'src/components/Layout/MainLayout';
import { useRouter } from 'next/navigation';

// import classes from './style.module.scss

const propTypes = {
	reset: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
};

const defaultProps = {
	reset: f => f,
	error: {},
};

const GlobalError = (props) => {
	const { error, reset } = props;
	const router = useRouter();

	React.useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<RootLayout>
			<main>
				<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
					<div className="max-w-lg mx-auto space-y-5 text-center">
						<h3 className="text-indigo-600 font-semibold">
							{error} Error
						</h3>
						<p className="text-gray-800 dark:text-gray-50 text-4xl font-semibold sm:text-5xl">
							Something went wrong!
						</p>
						<p className="text-gray-800 dark:text-gray-50">
							Sorry, the page you are looking for could not be found or has been removed.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-3">
							<Button
								onClick={
									// Attempt to recover by trying to re-render the segment
									() => reset()
								}
							>
								Try again
							</Button>
							<Button onClick={() => router.push('/support')}>
								Contact support
							</Button>
						</div>
					</div>
				</div>
			</main>
		</RootLayout>
	);
};

GlobalError.propTypes = propTypes;

GlobalError.defaultProps = defaultProps;

export default GlobalError;
