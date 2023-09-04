/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:59:19

* Last updated on: 2023-07-17 20:59:19
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Image from 'next/image';
import heroThumbnail from 'public/images/hero-thumbnail.png';

import GradientWrapper from 'src/components/UIDisplay/GradientWrapper';
import NavLink from 'src/components/Layout/Navbar/NavLink';
import HeroIntroVideo from 'src/components/UIDisplay/HeroIntroVideo';
import { useTranslations } from 'next-intl';

// import classes from './style.module.scss

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Hero = (props) => {
	// const { } = props;
	const [isVideoPoppedUp, setVideoPopUp] = useState(false);

	const t = useTranslations('LandingPage.Hero');

	return (
		<GradientWrapper>
			<section>
				<div className="custom-screen items-center gap-12 text-gray-600 flex flex-col sm:justify-center sm:text-center xl:flex-row xl:text-left">
					<div className="flex-none space-y-5 max-w-4xl xl:max-w-2xl">
						<h1 className="text-4xl text-white font-extrabold sm:text-6xl">
							{t('title')}
						</h1>
						<p className="text-gray-300 max-w-xl sm:mx-auto xl:mx-0">
							{t('text')}
						</p>
						<div className="items-center gap-x-3 font-medium text-sm sm:flex sm:justify-center xl:justify-start">
							<NavLink
								href="#pricing"
								className="block text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
								// scroll={false}
							>
								Get started
							</NavLink>
							<NavLink
								href="#cta"
								className="block text-gray-100 bg-gray-700 hover:bg-gray-800 mt-3 sm:mt-0"
								// scroll={false}
							>
								Learn more
							</NavLink>
						</div>
					</div>
					<div className="flex-1 w-full sm:max-w-2xl xl:max-w-xl">
						<div className="relative">
							<Image src={heroThumbnail} className="rounded-lg w-full" alt="IO Academy" />
							<button
								aria-label="Video player button"
								className="absolute w-14 h-10 rounded-lg inset-0 m-auto duration-150 bg-gray-800 hover:bg-gray-700 ring-offset-2 focus:ring text-white"
								onClick={() => setVideoPopUp(true)}
								type="button"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
									<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				{
					isVideoPoppedUp ? (
						<HeroIntroVideo onClose={() => setVideoPopUp(false)} />
					) : ''
				}
			</section>
		</GradientWrapper>
	);
};

Hero.propTypes = propTypes;

export default Hero;
