'use client';

import React from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

// eslint-disable-next-line react/prop-types
export const AntdProvider = ({ children }) => {
	const cache = createCache();

	const render = <>{children}</>;

	useServerInsertedHTML(() => {
		return (
			<script
				dangerouslySetInnerHTML={{
					__html: `<script>${extractStyle(cache)}</script>`,
				}}
			/>
		);
	});

	// if (typeof window !== 'undefined') {
	// 	return render;
	// }

	return (
		<StyleProvider hashPriority="high" cache={cache}>
			{render}
		</StyleProvider>
	);
};
