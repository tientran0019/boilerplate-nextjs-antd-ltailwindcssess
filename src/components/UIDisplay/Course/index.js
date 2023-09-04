/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:38:16

* Last updated on: 2023-07-17 20:38:16
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import lessonsExamples from 'src/lessonExamples/lessons.json';

import Link from 'next-intl/link';

import SectionWrapper from 'src/components/UIDisplay/SectionWrapper';

import LessonCardGrid from './LessonCard/LessonCardGrid';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Course = (props) => {
	// const { } = props;

	return (
		<SectionWrapper>
			<div className="custom-screen text-gray-600 dark:text-gray-300">
				<div className="max-w-xl space-y-3">
					<h2 className="text-gray-800 dark:text-gray-50 text-3xl font-semibold sm:text-4xl">
						Get started with our computer science course
					</h2>
					<p>
						IO academy is a leading provider of high-quality, affordable Computer Science education.{' '}
						<Link href="/tutorials/cs50" className="text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600 inline-flex items-center gap-x-1 duration-150">
							Browse lessons
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
							</svg>
						</Link>
					</p>
				</div>
				<div className="mt-12">
					<ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
						{
							lessonsExamples.map((item, idx) => (
								<li key={idx}>
									<LessonCardGrid idx={idx} item={item} />
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</SectionWrapper>
	);
};

Course.propTypes = propTypes;

export default Course;
