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

import { Inter } from 'next/font/google';

import ThemeProvider from 'src/theme/ThemeProvider';
import LocaleProvider from 'src/locale/LocaleProvider';
import AuthProvider from 'src/auth/AuthProvider';

import { DEFAULT_LOCALE } from 'src/locale';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line react/function-component-definition
export default function Provider(props) {
	const { children, locale = DEFAULT_LOCALE } = props;

	return (
		<html lang={locale} className="scroll-smooth dark">
			<body suppressHydrationWarning className={inter.className + ' dark:bg-gray-900'}>
				<LocaleProvider locale={locale}>
					<ThemeProvider locale={locale}>
						<AuthProvider>
							{children}
						</AuthProvider>
					</ThemeProvider>
				</LocaleProvider>
			</body>
		</html>
	);
}
