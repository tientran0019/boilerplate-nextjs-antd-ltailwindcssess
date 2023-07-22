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
		<ConfigProvider
			theme={{
				algorithm: themeName === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
				...theme,
			}}
		>
			<StyleProvider hashPriority="high">
				{node}
			</StyleProvider>
		</ConfigProvider>
	));

	useServerInsertedHTML(() => {
		if (!isServerInserted.current) {
			isServerInserted.current = true;
			return <style>{css}</style>;
		}
	});

	return (
		<ConfigProvider
			theme={{
				algorithm: themeName === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
				...theme,
			}}
		>
			<StyleProvider hashPriority="high">
				{children}
			</StyleProvider>
		</ConfigProvider>
	);
};

// eslint-disable-next-line import/no-anonymous-default-export, react/function-component-definition
export default ({ children }) => (<ThemeProvider defaultTheme="dark" attribute="class"><Provider>{children}</Provider></ThemeProvider>);
