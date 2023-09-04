/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 18:17:15

* Last updated on: 2023-07-17 18:17:15
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next-intl/link';
import { useParams } from 'next/navigation';
import PlayListButton from './PlayListButton';

// import classes from './style.module.scss

const propTypes = {
	items: PropTypes.array.isRequired,
	className: PropTypes.string,
};

const PlayList = (props) => {
	const { items = {}, className, ...rest } = props;
	const [isOpen, setOpen] = React.useState(false);

	const { slug } = useParams();

	return (
		<div {...rest} className={`${className || ''} border-y dark:border-gray-800 lg:border-none`}>
			<PlayListButton
				isOpen={isOpen}
				onClick={() => setOpen(!isOpen)}
			/>
			<h3 className="hidden text-xl text-gray-800 dark:text-gray-50 font-semibold lg:block">
				Course playlist
			</h3>
			<div className={isOpen ? '' : 'hidden lg:block'}>
				<p className="mt-4 text-gray-700 dark:text-gray-400 lg:mt-3">
					6 Lessons
				</p>
				<ul className="mt-6 pb-4 space-y-1 max-h-[450px] overflow-auto lg:max-w-sm lg:pb-0">
					{
						items?.map((item, idx) => (
							<li key={idx} className={`rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 duration-150 ${slug === item.slug ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
								<Link
									href={`/tutorials/cs50/${item.slug}`}
									className="flex items-center gap-x-3 p-3"
								>
									<span className="text-sm font-medium">{idx + 1}</span>
									<h4 className="flex-1 text-gray-700 dark:text-gray-200 font-medium lg:line-clamp-1">
										{item.title}
									</h4>
									<span className="text-sm">{item.duration}</span>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
};

PlayList.propTypes = propTypes;

export default PlayList;
