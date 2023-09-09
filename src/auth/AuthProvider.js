/* eslint-disable react/prop-types */

'use client';

import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }) => {
	return <SessionProvider refetchOnWindowFocus>{children}</SessionProvider>;
};

export default AuthProvider;
