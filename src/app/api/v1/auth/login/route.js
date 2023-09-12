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

// const EXPIRE_TIME = 60 * 60 * 1000;

export async function POST(req) {
	const { email, password } = await req.json();

	if (email !== 'admin@gmail.com' || password !== 'admin123') {
		return NextResponse.json({ message: 'Email or password is not correct' }, { status: 401 });
	}

	return NextResponse.json({
		statusCode: 200,
		result: {
			image: 'https://i.pravatar.cc/150?img=37',
			email: 'admin@gmail.com',
			name: 'admin',
			id: '5aa2b060ccec81437a61ec0f',
		},
	});
	// return NextResponse.json({
	// 	statusCode: 200,
	// 	result: {
	// 		expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
	// 		user: {
	// 			image: 'https://i.pravatar.cc/150?img=37',
	// 			createdAt: '2018-03-09T16:03:43.959Z',
	// 			email: 'admin@gmail.com',
	// 			name: 'admin',
	// 			gender: 'male',
	// 			id: '5aa2b060ccec81437a61ec0f',
	// 			phone: '123123123',
	// 			updatedAt: '2019-10-30T01:10:33.400Z',
	// 		},
	// 		userId: '5aa2b060ccec81437a61ec0f',
	// 		accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg',
	// 		refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw',
	// 	},
	// });
}
