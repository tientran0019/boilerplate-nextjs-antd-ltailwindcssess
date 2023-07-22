/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 17:07:31

* Last updated on: 2023-07-17 17:07:31
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Loading = (props) => {
	// const { } = props;

	return (
		<main>
			<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
				<div className="max-w-lg mx-auto space-y-3 text-center">
					<Spin
						indicator={<LoadingOutlined
							style={{
								fontSize: 24,
							}}
							spin
						/>}

					/>
				</div>
			</div>
		</main>
	);
};

Loading.propTypes = propTypes;

export default Loading;
