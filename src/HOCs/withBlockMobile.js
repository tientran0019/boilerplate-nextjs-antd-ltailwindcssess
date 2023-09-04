/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-20 23:50:36
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next-intl/client';
import { Button } from 'antd';
import { isMobile } from 'react-device-detect';

import configs from 'src/constants/urls';

const propTypes = {
	deviceInfo: PropTypes.object,
};

const withBlockMobile = (Component, options = {}) => {
	// eslint-disable-next-line func-names
	return function (props) {
		const { deviceInfo } = props;

		const router = useRouter();

		const mobile = isMobile || deviceInfo?.isMobile;

		React.useEffect(() => {
			if (mobile) {
				window.location.replace('boilerplate://');
			}
		}, [mobile, router]);

		if (!mobile) {
			return <Component {...props} />;
		}
		return (
			<div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '100vh' }}>
				<img src="/icons/icon.png" alt="logo" width={100} />
				<span className="text-center mt-2">Connecting...</span>
				{
					mobile &&
					<div className="mt-4">
						<Button
							size="small"
							type="primary"
							onClick={() => {
								window.location.replace('boilerplate://');
							}}
							block
						>
							Open in App
						</Button>
						<Button
							size="small"
							type="primary"
							className="mt-2"
							onClick={() => {
								const fallbackLink = deviceInfo?.osName === 'Android' ? configs.GOOGLE_PLAY_URL : configs.APP_STORE_URL;
								window.setTimeout(() => { window.location.replace(fallbackLink); }, 25);
							}}
							block
						>
							Install
						</Button>
					</div>
				}
			</div>
		);
	};
};

withBlockMobile.propTypes = propTypes;

export default withBlockMobile;
