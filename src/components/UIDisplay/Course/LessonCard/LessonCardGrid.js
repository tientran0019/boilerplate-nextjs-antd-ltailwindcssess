/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:42:41

* Last updated on: 2023-07-17 20:42:41
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next-intl/link';

import Duration from './Duration';
import SubTitle from './SubTitle';
import Title from './Title';

const propTypes = {
	item: PropTypes.object.isRequired,
	idx: PropTypes.number.isRequired,
};

const LessonCardGrid = (props) => {
	const { idx, item: { thumbnail, title, description, duration, slug } = {} } = props;

	return (
		<div className="space-y-2 sm:max-w-sm">
			<Link href={`/tutorials/cs50/${slug}`}>
				<img src={thumbnail} className="rounded-lg w-full" alt={title} />
			</Link>
			<div className="pt-2 text-sm flex items-center justify-between">
				<SubTitle>Lesson {idx + 1}</SubTitle>
				<Duration>{duration}</Duration>
			</div>
			<Title>
				<Link href={`/tutorials/cs50/${slug}`}>
					{title}
				</Link>
			</Title>
			<p>
				{description}
			</p>
		</div>
	);
};

LessonCardGrid.propTypes = propTypes;

export default LessonCardGrid;
