/* eslint-disable react/prop-types */

'use client';

import { useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';

// import { defaultLocale, languages } from '@/locale';

import { AntdProvider } from './AntdProvider';

import customThemes from './custom-themes';

// eslint-disable-next-line react/prop-types
export const AntdConfigProvider = ({ children, locale }) => {
	const { theme: nowTheme } = useTheme();

	return (
		<ConfigProvider
			// locale={languages[locale ?? defaultLocale].antd}
			theme={{
				algorithm: nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
				...customThemes,
			}}
		>
			<AntdProvider>{children}</AntdProvider>
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
		return <div className="hidden">{props.children}</div>;
	}

	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<AntdConfigProvider {...props} />
		</NextThemeProvider>
	);
}
