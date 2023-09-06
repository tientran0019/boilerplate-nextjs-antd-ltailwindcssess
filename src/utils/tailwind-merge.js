/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-06 14:53:35

* Last updated on: 2023-09-06 14:53:35
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
