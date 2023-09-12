/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-03 22:53:34

* Last updated on: 2023-09-03 22:53:34
* Last updated by: Tien Tran
*------------------------------------------------------- */

import Provider from 'src/provider';

import { LANGUAGES } from 'src/locale';

import { getMetadata } from 'src/constants/metadata';

export async function generateStaticParams() {
	return Object.values(LANGUAGES).map((el) => {
		return { locale: el.locale };
	});
}

export async function generateMetadata(props) {
	const { params: { locale } = {} } = props;

	const meta = await getMetadata({
		locale,
	});

	return meta;
}

export default async function LocaleLayout(props) {
	const { children, params: { locale } = {} } = props;

	return (
		<Provider locale={locale}>
			{children}
		</Provider>
	);
}
