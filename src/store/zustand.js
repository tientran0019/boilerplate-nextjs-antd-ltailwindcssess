/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-09-07 22:07:18

* Last updated on: 2023-09-07 22:07:18
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { create } from 'zustand';
import pipe from 'ramda/es/pipe';

import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const createStore = pipe(devtools, immer, create);

export default createStore;
