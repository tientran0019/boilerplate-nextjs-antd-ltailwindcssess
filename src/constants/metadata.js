/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:19:38

* Last updated on: 2023-07-17 16:19:38
* Last updated by: Tien Tran
*------------------------------------------------------- */

// import { createTranslator } from 'next-intl';
import merge from 'lodash/merge';
import get from 'lodash/get';

import URLS from 'src/constants/urls';
import { getMessages } from 'src/locale';

export const getMetadataDefault = (data = {}) => {
	const {
		title = 'Next.js Boilerplate',
		description = 'A boilerplate for Reactjs app using nextjs, next-intl, redux, redux-thunk, antd, tailwindcss',
		locale = 'en',
		...rest
	} = data;

	const tt = {
		default: title,
		template: '%s | ' + title,
	};

	return merge({
		metadataBase: new URL(URLS.WEB_URL),
		title: tt,
		description,
		viewport: {
			width: 'device-width',
			initialScale: 1,
			maximumScale: 1,
		},
		icons: {
			icon: [{ url: '/icons/icon.png' }, new URL('/icons/icon.png', URLS.WEB_URL)],
			shortcut: ['/icons/shortcut-icon.png'],
			apple: [
				{ url: '/icons/apple-icon.png' },
				{ url: '/icons/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
			],
			other: [
				{
					rel: 'apple-touch-icon-precomposed',
					url: '/icons/apple-touch-icon-precomposed.png',
				},
			],
		},
		generator: 'Next.js',
		applicationName: 'Next.js',
		referrer: 'origin-when-cross-origin',
		keywords: ['Next.js', 'React', 'JavaScript', 'boilerplate', 'nextjs', 'next-intl', 'redux', 'redux-thunk', 'antd', 'tailwindcss'],
		authors: [{ name: 'Tien Tran', url: 'https://github.com/tientran0019' }],
		colorScheme: '#0ea5e9',
		creator: 'Tien Tran',
		publisher: 'Tien Tran',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		manifest: URLS.WEB_URL + '/manifest.json',
		alternates: {
			canonical: '/',
			languages: {
				'en': '/en',
				'vi': '/vi',
			},
		},
		lang: locale,
		openGraph: {
			title: tt,
			description,
			url: URLS.WEB_URL, // TODO: Change it dynamic url
			siteName: 'Next.js Boilerplate',
			images: [
				{
					url: URLS.WEB_URL + '/images/hero-thumbnail.png',
					width: 800,
					height: 600,
				},
				{
					url: URLS.WEB_URL + '/images/hero-thumbnail.png',
					width: 1800,
					height: 1600,
					alt: 'My custom alt',
				},
			],
			locale,
			type: 'website',
		},
	}, rest);
};

export const generateTranslator = async (locale, namespace = 'Metadata') => {
	const messages = await getMessages(locale);

	// You can use the core (non-React) APIs when you have to use next-intl
	// outside of components. Potentially this will be simplified in the future
	// (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
	// const t = createTranslator({ locale, messages, namespace });

	if (!namespace || namespace === 'Metadata') {
		return messages.Metadata;
	}

	return {
		...messages.Metadata,
		...(get(messages, namespace)),
	};
};

export const getMetadata = async (data = {}) => {
	const { locale, namespace = 'Metadata', ...rest } = data;

	const t = await generateTranslator(locale, namespace);

	return {
		...getMetadataDefault({
			...t,
			...rest,
			locale,
		}),
	};
};
