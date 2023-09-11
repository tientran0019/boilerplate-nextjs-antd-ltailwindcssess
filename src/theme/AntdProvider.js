/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-03 23:24:03

* Last updated on: 2023-09-03 23:24:03
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

// suppress useLayoutEffect warnings when running outside a browser
if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect;

// eslint-disable-next-line react/prop-types
export const AntdProvider = ({ children }) => {
	const cache = createCache();

	useServerInsertedHTML(() => {
		return (
			<style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
		);
	});

	if (typeof window !== 'undefined') {
		return children;
	}

	return (
		<StyleProvider hashPriority="high" cache={cache}>
			{children}
		</StyleProvider>
	);
};
