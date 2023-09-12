/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-03 22:53:34

* Last updated on: 2023-09-03 22:53:34
* Last updated by: Tien Tran
*------------------------------------------------------- */

import RootLayout from 'src/components/Layout/MainLayout';

export default async function LocaleLayout(props) {
	const { children } = props;

	return (
		<RootLayout>
			{children}
		</RootLayout>
	);
}
