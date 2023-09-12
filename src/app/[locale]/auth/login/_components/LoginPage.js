/* eslint-disable jsx-a11y/label-has-associated-control */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:26:38

* Last updated on: 2023-07-17 16:26:38
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next-intl/link';
import { Form, Button, Divider, Input } from 'antd';
import { signIn, useSession } from 'next-auth/react';

import Brand from 'src/components/Layout/Logo';
import { notification } from 'src/components/UIControl/Statics';

import useAuthStore from 'src/store/auth';
import { AiFillFacebook, AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { useRouter } from 'next-intl/client';

// import classes from './style.module.scss

const propTypes = {
	searchParams: PropTypes.object.isRequired,
};

const LoginContainer = (props) => {
	const { searchParams: { callbackUrl } = {} } = props;

	// const [api, contextHolder] = notification.useNotification();
	const router = useRouter();

	// const { } = props;
	const [loading, setLoading] = React.useState(false);
	const { data: session, status } = useSession();
	console.log('DEV ~ file: Container.js:37 ~ LoginContainer ~ session:', session);
	const auth = useAuthStore();
	console.log('DEV ~ file: Container.js:35 ~ LoginContainer ~ auth:', auth);

	const handleLogin = React.useCallback(async (values) => {
		try {
			setLoading(true);
			const res = await signIn('credentials', {
				...values,
				redirect: false,
				callbackUrl,
			});

			if (res.error) {
				notification.error({
					message: 'Oops!',
					description: res.error,
				});

				return;
			}

			router.replace(callbackUrl, {});
			// router.refresh();
		} finally {
			setLoading(false);
		}
	}, [callbackUrl, router]);

	return (
		<div className="bg-gray-50 dark:bg-gray-900 w-full min-h-screen flex flex-col items-center justify-center px-4 pt-10 backgroundImage">
			{/* {contextHolder} */}

			<div
				className="blur-[138px] absolute inset-0 m-auto max-w-7xl h-[230px]"
				style={{
					background:
						'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
				}}
			/>
			<div className="max-w-sm w-full text-gray-600 dark:text-gray-300">
				<div className="text-center">
					<Brand className="mx-auto w-48 text-gray-800 dark:text-white" />
					<div className="mt-5 space-y-2">
						<h3 className="text-gray-800 dark:text-white text-2xl font-bold sm:text-3xl">
							Log in to your account
						</h3>
						<p className="">
							Don't have an account?{' '}
							<Link
								href="/#pricing"
								className="font-medium text-blue-600 dark:text-sky-500 hover:text-blue-400 dark:hover:text-sky-600 duration-150"
							>
								Get access
							</Link>
						</p>
					</div>
				</div>
				<Form
					name="normal_login"
					className="mt-8 space-y-5"
					onFinish={handleLogin}
					size="large"
				>
					<div>
						<label className="font-medium">Email</label>
						<Form.Item
							name="email"
							rules={[
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								}, {
									required: true,
									message: 'Please input your E-mail!',
								},
							]}
						>
							<Input
								type="email"
								required
								className="w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800"
							/>
						</Form.Item>
					</div>
					<div>
						<label className="font-medium">Password</label>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input
								type="password"
								required
								className="w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800"
							/>
						</Form.Item>
					</div>
					<Button type="primary" className="w-full" htmlType="submit" loading={loading || status === 'loading'}>
						Sign in
					</Button>
				</Form>
				<div className="relative my-10">
					<Divider plain>Or continue with</Divider>
				</div>
				<div className="space-y-4 text-sm font-medium">
					<button type="button" className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100" onClick={() => signIn('google', { callbackUrl })}>
						<AiOutlineGoogle size={24} />
						Continue with Google
					</button>
					<button type="button" className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100" onClick={() => signIn('facebook', { callbackUrl })}>
						<AiFillFacebook size={24} />
						Continue with Facebook
					</button>
					<button type="button" className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100" onClick={() => signIn('github', { callbackUrl })}>
						<AiFillGithub size={24} />
						Continue with Github
					</button>
				</div>

				<div className="text-center mt-7">
					<Link
						href="#"
						className="font-medium text-blue-600 dark:text-sky-500 hover:text-blue-400 dark:hover:text-sky-600 duration-150"
					>
						Forgot password?
					</Link>
				</div>
			</div>
		</div>
	);
};

LoginContainer.propTypes = propTypes;

export default LoginContainer;
