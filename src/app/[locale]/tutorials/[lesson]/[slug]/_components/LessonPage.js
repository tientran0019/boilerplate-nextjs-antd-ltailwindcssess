/* eslint-disable react/no-unstable-nested-components */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:40:53

* Last updated on: 2023-07-17 16:40:53
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';
import PropTypes from 'prop-types';

import content from 'src/lessonExamples/lesson';
import lessons from 'src/lessonExamples/lessons.json';

import PlayList from 'src/components/UIDisplay/PlayList';
import VideoPlayer from 'src/components/UIControl/VideoPlayer';

// import classes from './style.module.scss

const propTypes = {
	lessonData: PropTypes.object.isRequired,
};

const LessonPage = (props) => {
	const { lessonData = {} } = props;

	return (
		<>
			<div className="mt-16 lg:mt-20">
				<div className="mx-auto lg:max-w-screen-xl lg:px-8">
					<VideoPlayer
						src={lessonData?.lesson}
						type="video/mp4"
						poster={lessonData?.thumbnail}
					/>
				</div>
				<div className="mx-auto mt-12 gap-8 justify-between lg:flex lg:max-w-screen-xl lg:px-8">
					<div className="h-full lg:border-r lg:dark:border-gray-800 lg:pr-8">
						<h1
							className="text-3xl text-gray-800 dark:text-white font-semibold lg:text-4xl"
						>
							{lessonData?.title}
						</h1>
						<PlayList
							items={lessons}
							className="sticky -top-1 px-4 mt-6 bg-white dark:bg-gray-900 flex-none md:px-8 lg:hidden lg:px-0"
						/>
						<article
							className="px-4 mt-6 max-w-3xl prose dark:prose-invert md:px-8 lg:px-0"
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</div>
					<div className="flex-none hidden lg:block">
						<PlayList items={lessons} className="w-full sticky top-3" />
					</div>
				</div>
			</div>

			<style>
				{`

					@media (max-width: 1024px) {
						.plyr {
							border-radius: 0px;
						}
					}

				`}
			</style>
		</>
	);
};

LessonPage.propTypes = propTypes;

export default LessonPage;
