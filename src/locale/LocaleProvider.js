/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-02 00:18:15

* Last updated on: 2023-09-02 00:18:15
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { NextIntlClientProvider } from 'next-intl';

import { getMessages, DEFAULT_LOCALE } from 'src/locale';

// eslint-disable-next-line react/function-component-definition
export default async function LocaleProvider(props) {
	const { children, locale = DEFAULT_LOCALE } = props;

	const messages = await getMessages(locale);

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
