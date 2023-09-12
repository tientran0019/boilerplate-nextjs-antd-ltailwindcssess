/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-03 23:23:42

* Last updated on: 2023-09-03 23:23:42
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import { useEffect, useState } from 'react';

import { ConfigProvider, theme, App } from 'antd';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';

import { DEFAULT_LOCALE, LANGUAGES } from 'src/locale';
import Statics from 'src/components/UIControl/Statics';

import { AntdProvider } from './AntdProvider';

import generateTheme from './custom-themes';

// eslint-disable-next-line react/prop-types
export const AntdConfigProvider = ({ children, locale }) => {
	const { theme: nowTheme } = useTheme();

	return (
		<ConfigProvider
			locale={LANGUAGES[locale ?? DEFAULT_LOCALE].antd}
			theme={{
				algorithm: nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
				...generateTheme(nowTheme),
			}}
		>
			<AntdProvider>
				<App>
					{children}
					<Statics />
				</App>
			</AntdProvider>
		</ConfigProvider>
	);
};

// eslint-disable-next-line react/function-component-definition
export default function ThemeProvider(props) {
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// use your loading page
		// return props.children;
		return <div className="hidden">{props.children}</div>;
	}

	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem={false}
			// disableTransitionOnChange
		>
			<AntdConfigProvider {...props} />
		</NextThemeProvider>
	);
}
