/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/function-component-definition */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-04 11:40:40

* Last updated on: 2023-09-04 11:40:40
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'antd';

import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useSearchParams } from 'next/navigation';

import { HiOutlineLanguage } from 'react-icons/hi2';

import { LANGUAGES } from 'src/locale';

const propTypes = {
	className: PropTypes.string,
};

const w = typeof window === 'undefined' ? {} : window;

const LocaleToggle = (props) => {
	const { className } = props;
	const locale = useLocale();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const generateHref = React.useCallback((lang) => {
		// eslint-disable-next-line no-unsafe-optional-chaining
		const r = (pathname + (searchParams.toString() ? ('?' + searchParams.toString()) : '') + w?.location?.hash) ?? '/';

		const rArray = r.split('/');

		if (rArray?.[1] && Object.keys(LANGUAGES).includes(rArray?.[1])) {
			const [, , ...url] = rArray;
			return '/' + lang + '/' + url.join('/');
		}

		return '/' + lang + r;
	}, [pathname, searchParams, w?.location?.hash]);

	const menu = React.useMemo(() => {
		return {
			items: Object.entries(LANGUAGES).map(([lang, setting]) => ({
				key: lang,
				label: (
					<a href={generateHref(lang)} locale={lang}>
						{setting.flag}&nbsp;&nbsp;{setting.name}
					</a>
				),
				disabled: locale === lang,
			})),
		};
	}, [generateHref, locale]);

	return (
		<Dropdown
			menu={menu}
		>
			<div className={'btn p-2  rounded-lg dark:text-sky-500 dark:hover:bg-gray-800 ' + className} role="button" tabIndex={0}>
				<HiOutlineLanguage className="text-lg" />
			</div>
		</Dropdown>
	);
};

LocaleToggle.propTypes = propTypes;

export default LocaleToggle;
