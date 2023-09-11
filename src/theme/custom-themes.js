/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-08-19 10:08:12

* Last updated on: 2023-08-19 10:08:12
* Last updated by: Tien Tran
*------------------------------------------------------- */

import merge from 'lodash/merge';

const commonTheme = {
	token: {
		colorPrimary: '#0ea5e9',
		'borderRadius': 8,
		fontFamily: '\'Inter\', sans-serif',
		controlHeightLG: 50,
		controlHeight: 42,
	},
};

const themes = {
	dark: {
		token: {
			'colorBgBase': '#111827',
			'colorBgContainer': '#202a37',
			'colorTextBase': 'rgb(249, 250, 251)',
		},
	},
	light: {
		token: {

		},
	},
};

const generateTheme = (name = 'light') => {
	return merge({}, commonTheme, themes[name]);
};

export default generateTheme;
