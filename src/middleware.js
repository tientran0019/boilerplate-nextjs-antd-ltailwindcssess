/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-08-30 20:31:36

* Last updated on: 2023-08-30 20:31:36
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { pathToRegexp } from 'path-to-regexp';
import createIntlMiddleware from 'next-intl/middleware';
import { withAuth } from 'next-auth/middleware';

import { DEFAULT_LOCALE, LANGUAGES } from './locale';
import PRIVATE_PAGES from './auth/privatePages';

// import jwt from 'jsonwebtoken';

const checkPrivatePage = (path) => {
	const regexpList = PRIVATE_PAGES?.map((el) => {
		return pathToRegexp(el, [], {
			strict: false,
			sensitive: false,
			start: false,
			end: false,
		}).source;
	});

	const privatePathnameRegex = RegExp(
		`^(/(${Object.keys(LANGUAGES).join('|')}))?(${regexpList.join('|')})?$`,
		'i',
	);

	return privatePathnameRegex.test(path + '/');
};

const intlMiddleware = createIntlMiddleware({
	// A list of all locales that are supported
	locales: Object.keys(LANGUAGES),

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: DEFAULT_LOCALE,

	/** The default locale can be used without a prefix (e.g. `/about`). If you prefer to have a prefix for the default locale as well (e.g. `/en/about`), you can switch this option to `always`. */
	localePrefix: 'never',
});

const authMiddleware = withAuth(
	// Note that this callback is only invoked if
	// the `authorized` callback has returned `true`
	// and not for pages listed in `/app`.
	(req, res) => {
		return intlMiddleware(req, res);
	},
	{
		// jwt: {
		// 	async encode({ secret, token, maxAge }) {
		// 		return jwt.sign(token, secret);
		// 	},
		// 	async decode({ secret, token }) {
		// 		return jwt.verify(token, secret);
		// 	},
		// },
		callbacks: {
			authorized: ({ token, req }) => {
				// return true;
				return !!token;
			},
		},
	},
);

export default function middleware(req, res) {
	const isPrivatePage = checkPrivatePage(req.nextUrl.pathname);

	// return authMiddleware(req, res);
	if (isPrivatePage) {
		return authMiddleware(req, res);
	}
	return intlMiddleware(req, res);
}

// export const config = { matcher: ['/en/support', '/en/tutorials/:path*'] };

export const config = {
	// Skip all paths that aren't pages that you'd like to internationalize
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
