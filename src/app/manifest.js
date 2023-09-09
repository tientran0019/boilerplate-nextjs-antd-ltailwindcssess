/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-07 22:44:20

* Last updated on: 2023-09-07 22:44:20
* Last updated by: Tien Tran
*------------------------------------------------------- */

export default function manifest() {
	return {
		'name': 'Next.js Boilerplate',
		'short_name': 'boilerplate-nextjs-antd-tailwindcss',
		'description': 'A boilerplate for Reactjs app using nextjs, next-intl, zustand, antd, tailwindcss',
		'lang': 'en-EN',
		'start_url': '/',
		'display': 'standalone',
		'theme_color': '#0ea5e9',
		'background_color': '#fff',
		'icons': [
			{
				'src': '/icons/apple-icon-x3.png',
				'sizes': '512x512',
				'type': 'image/png',
			},
			{
				'src': '/icons/icon.png',
				'sizes': '192x192',
				'type': 'image/png',
			},
		],
	};
}
