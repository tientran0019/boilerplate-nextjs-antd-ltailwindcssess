/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-07 22:12:10

* Last updated on: 2023-09-07 22:12:10
* Last updated by: Tien Tran
*------------------------------------------------------- */

import fetchApi from 'src/utils/fetch-api';

import create from './zustand';

const initialState = {};

const useStore = create(() => ({
	...initialState,
}));

export const actionLogin = async (payload = {}, next = f => f) => {
	const res = await fetchApi({
		url: '/auth/login',
		payload,
		options: { method: 'POST' },
	}, next);

	useStore.setState(res.user);

	return res;
};

export const actionGetProfile = async (next = f => f) => {
	const res = await fetchApi({
		url: '/auth/profile',
	}, next);

	useStore.setState(res);

	return res;
};

export default useStore;
