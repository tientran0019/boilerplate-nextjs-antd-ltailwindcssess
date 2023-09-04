/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:44:40

* Last updated on: 2023-07-17 20:44:40
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next-intl/link';

import Duration from './Duration';
import SubTitle from './SubTitle';
import Title from './Title';

// import classes from './style.module.scss

const propTypes = {
	item: PropTypes.object.isRequired,
	idx: PropTypes.number.isRequired,
};

const LessonCardList = (props) => {
	const { idx, item: { thumbnail, title, description, duration, slug } = {} } = props;

	return (
		<div className="gap-x-6 sm:flex">
			<Link
				href={`/tutorials/cs50/${slug}`}
				className="sm:max-w-[17rem]"
			>
				<img
					src={thumbnail}
					className="rounded-lg w-full"
					alt={title}
					loading="lazy"
				/>
			</Link>
			<div className="space-y-2 pt-4 sm:pt-0">
				<div className="text-sm flex items-center justify-between">
					<SubTitle>Lesson {idx + 1}</SubTitle>
					<Duration className="sm:hidden">
						{duration}
					</Duration>
				</div>
				<Title>
					<Link
						href={`/tutorials/cs50/${slug}`}
					>
						{title}
					</Link>
				</Title>
				<p className="max-w-xl text-gray-600 dark:text-gray-300 sm:line-clamp-2">
					{description}
				</p>
				<Duration className="hidden sm:block">
					{duration}
				</Duration>
			</div>
		</div>
	);
};

LessonCardList.propTypes = propTypes;

export default LessonCardList;
