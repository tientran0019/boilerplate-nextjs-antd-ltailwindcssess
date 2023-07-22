/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 21:09:45

* Last updated on: 2023-07-17 21:09:45
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import 'plyr-react/plyr.css';

import React from 'react';
import PropTypes from 'prop-types';

import Plyr from 'plyr-react';

// import classes from './style.module.scss

const propTypes = {
	src: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	autoplay: PropTypes.bool,
	options: PropTypes.object,
};

// Some resources to help you understand more about the video player
// https://github.com/sampotts/plyr
// https://github.com/chintan9/plyr-react
const VideoPlayer = (props) => {
	const {
		src,
		type,
		poster = '',
		autoplay = false,
		options = {},
	} = props;

	return (
		<Plyr
			source={{
				type: 'video',
				sources: [{
					src,
					type,
				}],
				poster,
				autoplay,
			}}
			options={options}
		/>
	);
};

VideoPlayer.propTypes = propTypes;

export default VideoPlayer;
