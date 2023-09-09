/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-08-30 20:32:00

* Last updated on: 2023-08-30 20:32:00
* Last updated by: Tien Tran
*------------------------------------------------------- */

/* eslint-disable camelcase */
import { notFound } from 'next/navigation';

import en_US from 'antd/locale/en_US';
import vi_VN from 'antd/locale/vi_VN';

// https://gist.github.com/mattlockyer/e3d9d92beba71010ae5f88653219bc23

export const LANGUAGES = {
	'en': {
		locale: 'en',
		name: 'English',
		flag: '🇺🇸',
		unicode: '1f1fa-1f1f8',
		antd: en_US,
	},
	'vi': {
		locale: 'vi',
		name: 'Vietnam',
		flag: '🇻🇳',
		unicode: '1f1fb-1f1f3',
		antd: vi_VN,
	},
};

export const DEFAULT_LOCALE = 'en';

export async function getMessages(locale = DEFAULT_LOCALE) {
	try {
		return (await import(`src/locale/messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
}
