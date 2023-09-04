/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-08-30 20:31:36

* Last updated on: 2023-08-30 20:31:36
* Last updated by: Tien Tran
*------------------------------------------------------- */

import createMiddleware from 'next-intl/middleware';

import { defaultLocale, languages } from './locale';

export default createMiddleware({
	// A list of all locales that are supported
	locales: Object.keys(languages),

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale,

	/** The default locale can be used without a prefix (e.g. `/about`). If you prefer to have a prefix for the default locale as well (e.g. `/en/about`), you can switch this option to `always`. */
	localePrefix: 'never',
});

export const config = {
	// Skip all paths that aren't pages that you'd like to internationalize
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
