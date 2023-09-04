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

// 'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { notFound } from 'next/navigation';

import lessons from 'src/lessonExamples/lessons.json';

import { getMetadataDefault } from 'src/constants/metadata';

import LessonPage from './_components/LessonPage';

// import classes from './style.module.scss

const propTypes = {
	params: PropTypes.object.isRequired,
};

// export const dynamicParams = true;
// export const dynamic = 'auto';
// export const revalidate = false;
// export const fetchCache = 'auto';
// export const runtime = 'nodejs';
// export const preferredRegion = 'auto';

async function getServerSideLessons(slug) {
	// Get the lesson based on the slug and pass the data to props
	const lessonData = lessons.find((item) => item.slug === slug);
	return lessonData;
}

export async function generateMetadata(props) {
	const { params: { slug, locale } = {} } = props;

	const lessonData = await getServerSideLessons(slug);

	return getMetadataDefault({
		title: lessonData?.title,
		description: lessonData?.description,
		locale,
		openGraph: {
			url: '/tutorials/cs50/' + lessonData.slug,
			images: [
				{
					url: lessonData?.thumbnail,
					width: 800,
					height: 600,
				},
				{
					url: lessonData?.thumbnail,
					width: 1800,
					height: 1600,
					alt: lessonData?.slug,
				},
			],
		},
	});
}

const Lesson = async (props) => {
	const { params: { slug } = {} } = props;

	const lessonData = await getServerSideLessons(slug);

	if (!lessonData) {
		notFound();
	}

	return (
		<LessonPage
			lessonData={lessonData}
		/>
	);
};

Lesson.propTypes = propTypes;

export default Lesson;
