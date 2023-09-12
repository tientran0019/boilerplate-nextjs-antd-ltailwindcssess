/* eslint-disable import/no-mutable-exports */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-12 19:43:05

* Last updated on: 2023-09-12 19:43:05
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

// import React from 'react';
// import PropTypes from 'prop-types';

import { App } from 'antd';

// import classes from './style.module.scss

let message;
let notification;
let modal;

const Statics = () => {
	const staticFunction = App.useApp();

	message = staticFunction.message;
	modal = staticFunction.modal;
	notification = staticFunction.notification;

	return null;
};

export { notification, message, modal };

export default Statics;
