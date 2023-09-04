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

import { Dropdown } from 'antd';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

import PropTypes from 'prop-types';

import { HiOutlineLanguage } from 'react-icons/hi2';

import { languages } from 'src/locale';

const propTypes = {
	className: PropTypes.string,
};

const LocaleToggle = (props) => {
	const { className } = props;
	const pathname = usePathname();

	return (
		<Dropdown
			menu={{
				items: Object.entries(languages).map(([lang, setting]) => ({
					key: lang,
					label: (
						<Link href={pathname ?? '/'} locale={lang}>
							{setting.flag}&nbsp;&nbsp;{setting.name}
						</Link>
					),
				})),
			}}
		>
			<div className={'btn p-2  rounded-lg dark:text-sky-500 dark:hover:bg-gray-800 ' + className} role="button" tabIndex={0}>
				<HiOutlineLanguage className="text-lg" />
			</div>
		</Dropdown>
	);
};

LocaleToggle.propTypes = propTypes;

export default LocaleToggle;
