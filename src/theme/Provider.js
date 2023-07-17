/* eslint-disable react/prop-types */

'use client';

import React from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider } from '@ant-design/cssinjs';
import { extractStyle } from '@ant-design/static-style-extract';
import { ThemeProvider, useTheme } from 'next-themes';

const theme = {
	token: {
		colorPrimary: '#0ea5e9',
		'borderRadius': 8,
		fontFamily: '\'Inter\', sans-serif',
		controlHeightLG: 50,
		controlHeight: 40,
	},
};

const Provider = ({ children }) => {
	const isServerInserted = React.useRef(false);
	const { theme: themeName } = useTheme();

	const css = extractStyle((node) => (
		<ThemeProvider defaultTheme="dark" attribute="class">
			<ConfigProvider
				theme={{
					algorithm: themeName === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
					...theme,
				}}
			>
				<StyleProvider hashPriority="high">
					{node}
				</StyleProvider>
			</ConfigProvider>
		</ThemeProvider>
	));

	useServerInsertedHTML(() => {
		if (!isServerInserted.current) {
			isServerInserted.current = true;
			return <style>{css}</style>;
		}
	});

	return (
		<ThemeProvider defaultTheme="dark" attribute="class">
			<ConfigProvider
				theme={{
					algorithm: themeName === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
					...theme,
				}}
			>
				<StyleProvider hashPriority="high">
					{children}
				</StyleProvider>
			</ConfigProvider>
		</ThemeProvider>
	);
};

export default Provider;
