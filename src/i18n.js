/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-08-30 20:31:47

* Last updated on: 2023-08-30 20:31:47
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./locale/messages/${locale}.json`)).default,
}));
