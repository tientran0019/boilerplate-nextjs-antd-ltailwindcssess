/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-07 23:50:37

* Last updated on: 2023-09-07 23:50:37
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req) {
	// const data = await req.json();
	// console.log('DEV ~ file: route.js:18 ~ GET ~ data:', req);
	const token = await getToken({ req });
	// console.log('DEV ~ file: route.js:19 ~ GET ~ token:', token);

	if (!token) {
		return NextResponse.json({ message: 'Access Denied' }, { status: 401 });
	}

	return NextResponse.json({
		statusCode: 200,
		result: {
			avatar: 'https://i.pravatar.cc/150?img=37',
			birthDate: '1989-12-31T17:00:00.000Z',
			branch: 'all',
			createdAt: '2018-03-09T16:03:43.959Z',
			email: 'admin@gmail.com',
			fullName: 'admin',
			gender: 'male',
			phone: '123123123',
			status: 'active',
			updatedAt: '2019-10-30T01:10:33.400Z',
			...token,
			id: token.sub,
		},
	});
}
