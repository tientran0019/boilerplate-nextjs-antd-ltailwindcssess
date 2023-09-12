/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-09 21:57:19

* Last updated on: 2023-09-09 21:57:19
* Last updated by: Tien Tran
*------------------------------------------------------- */

import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

// import jwt from 'jsonwebtoken';

// import fetchApi from 'src/utils/fetch-api';
import { actionLogin } from 'src/store/auth';

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null;
				const { email, password } = credentials;
				const user = await actionLogin({
					email,
					password,
				});
				// console.log('DEV ~ file: route.js:43 ~ authorize ~ user:', user);
				// const user = await fetchApi({
				// 	url: '/auth/login',
				// 	payload: {
				// 		email,
				// 		password,
				// 	},
				// 	options: {
				// 		method: 'POST',
				// 	},
				// });

				return user;
			},
		}),
		GitHubProvider({
			name: 'github',
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			name: 'google',
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			name: 'facebook',
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
	// jwt: {
	// 	maxAge: 60 * 60 * 24 * 30,
	// 	async encode({ secret, token, maxAge }) {
	// 		console.log('DEV ~ file: index.js:74 ~ encode ~ token:', token);
	// 		const { accessToken, ...rest } = token;
	// 		const t = jwt.sign(rest, secret);
	// 		console.log('DEV ~ file: index.js:76 ~ encode ~ t:', t);
	// 		return t;
	// 	},
	// 	async decode({ secret, token }) {
	// 		console.log('DEV ~ file: index.js:80 ~ decode ~ token:', token);
	// 		const payload = jwt.verify(token, secret);

	// 		payload.accessToken = token;

	// 		console.log('DEV ~ file: index.js:82 ~ decode ~ payload:', payload);
	// 		return payload;
	// 	},
	// },

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// console.log('DEV ~ file: index.js:59 ~ signIn ~ user, account:', user, account, profile, email, credentials);
			// if (account.provider === 'github') {
			// 	const githubUser = {
			// 		id: profile.id,
			// 		login: profile.login,
			// 		name: profile.name,
			// 		avatar: user.image,
			// 	};
			// 	console.log('DEV ~ file: index.js:66 ~ signIn ~ githubUser:', githubUser);

			// 	// eslint-disable-next-line no-param-reassign
			// 	// user.accessToken = await getTokenFromYourAPIServer('github', githubUser);

			// 	return true;
			// }

			// Google also returns a email_verified boolean property in the OAuth profile.
			// if (account.provider === 'google') {
			// 	return profile.email_verified && profile.email.endsWith('@example.com');
			// }
			return true;
		},

		// async redirect({ url, baseUrl }) {
		// 	// Allows relative callback URLs
		// 	if (url.startsWith('/')) return `${baseUrl}${url}`;
		// 	// Allows callback URLs on the same origin
		// 	if (new URL(url).origin === baseUrl) return url;
		// 	return baseUrl;
		// },

		// async jwt(props) {
		// 	console.log('DEV ~ file: index.js:115 ~ jwt ~ props:', props);
		// 	return props.token;
		// },
		// async jwt({ token, user, account, profile, isNewUser }) {
		// 	if (user) return { ...token, ...user };

		// 	if (new Date().getTime() < token?.expiresIn) { return token; }

		// 	const res = await fetchApi({
		// 		url: '/auth/refresh',
		// 		options: {
		// 			method: 'POST',
		// 			headers: {
		// 				authorization: `Refresh ${token.refreshToken}`,
		// 			},
		// 		},
		// 	});

		// 	return {
		// 		...token,
		// 		...res,
		// 	};
		// },

		async session({ token, session }) {
			// console.log('DEV ~ file: index.js:125 ~ session ~ token, session:', token, session);
			// eslint-disable-next-line no-param-reassign
			// session.user = token.user;
			// // eslint-disable-next-line no-param-reassign
			// session = token;

			// eslint-disable-next-line no-param-reassign
			session.accessToken = token.accessToken;
			// session.user = getUserFromTheAPIServer(session.accessToken)

			return session;
		},
	},
	pages: {
		signIn: '/auth/login',
		error: '/auth/error', // Error code passed in query string as ?error=
		// signOut: '/auth/signout',
		// verifyRequest: '/auth/verify-request', // (used for check email message)
		// newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	// events: {
	// 	async signIn(message) { /* on successful sign in */ },
	// 	async signOut(message) { /* on signout */ },
	// 	async createUser(message) { /* user created */ },
	// 	async updateUser(message) { /* user updated - e.g. their email was verified */ },
	// 	async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
	// 	async session(message) { /* session is active */ },
	// },
	debug: process.env.NEXTAUTH_DEBUG_MODE,
	events: {
		async signOut({ token }) {
			console.info(token, '[EVENT][SIGN_OUT]');
		},
	},
	// logger: {
	// 	error(code, metadata) {
	// 		console.error(code, metadata, '[LOGGER][ERROR]');
	// 	},
	// 	warn(code) {
	// 		console.warn(code, '[LOGGER][WARN]');
	// 	},
	// 	debug(code, metadata) {
	// 		console.debug(code, metadata, '[LOGGER][DEBUG]');
	// 	},
	// },
};
