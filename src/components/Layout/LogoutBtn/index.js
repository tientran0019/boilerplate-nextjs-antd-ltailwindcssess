/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:51:01

* Last updated on: 2023-07-17 20:51:01
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { useSession, signOut } from 'next-auth/react';

import { Modal } from 'antd';

import { AiOutlineLogout } from 'react-icons/ai';

// import classes from './style.module.scss

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
};

const LogoutBtn = (props) => {
	const { className, children } = props;
	const [modal, contextHolder] = Modal.useModal();

	const { data: session } = useSession();

	const handleLogout = React.useCallback(() => {
		modal.confirm({
			title: 'Logout',
			content: 'Are you sure?',
			onOk: async () => {
				await signOut({
					// redirect: false,
					// callbackUrl: '/',
				});
			},
		});
	}, [modal]);

	if (!session) {
		return null;
	}

	return (
		<>
			<button
				type="button"
				aria-label="logout"
				className={`${className || ''} dark:text-red-500 bg-transparent text-red-500 hover:bg-gray-800 p-2 rounded-lg  dark:hover:bg-gray-800`}
				onClick={handleLogout}
			>
				{
					children ||
					<AiOutlineLogout className="text-lg" />
				}
			</button>
			{contextHolder}
		</>
	);
};

LogoutBtn.propTypes = propTypes;

export default LogoutBtn;
