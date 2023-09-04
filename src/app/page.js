/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 11:24:05

* Last updated on: 2023-07-17 11:24:05
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
	redirect('/en');
}
