/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-03 22:53:34

* Last updated on: 2023-09-03 22:53:34
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { createTranslator } from 'next-intl';

import Provider from 'src/provider';
import RootLayout from 'src/components/Layout/MainLayout';

import { getMessages, languages } from 'src/locale';

export async function generateStaticParams() {
	return Object.values(languages);
}

export async function generateMetadata({ params: { locale } }) {
	const messages = await getMessages(locale);

	// You can use the core (non-React) APIs when you have to use next-intl
	// outside of components. Potentially this will be simplified in the future
	// (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
	const t = createTranslator({ locale, messages, namespace: 'Metadata' });

	return {
		title: t('title'),
	};
}

// export async function generateMetadata() {
// 	const t = await getTranslations('site');
// 	const locale = getLocale();
// 	const title = t('title');
// 	const description = t('desc');

// 	return {
// 	  title,
// 	  description,
// 	  icons: {
// 		icon: '/favicon.ico',
// 	  },
// 	  openGraph: {
// 		title,
// 		description,
// 		url: 'https://nextjs.org',
// 		siteName: title,
// 		images: [
// 		  {
// 			url: 'https://nextjs.org/og.png',
// 			width: 800,
// 			height: 600,
// 		  },
// 		  {
// 			url: 'https://nextjs.org/og-alt.png',
// 			width: 1800,
// 			height: 1600,
// 			alt: 'My custom alt',
// 		  },
// 		],
// 		locale,
// 		type: 'website',
// 	  },
// 	};
//   }

export default async function LocaleLayout(props) {
	const { children, params: { locale } } = props;

	return (
		<Provider locale={locale}>
			<RootLayout>
				{children}
			</RootLayout>
		</Provider>
	);
}
