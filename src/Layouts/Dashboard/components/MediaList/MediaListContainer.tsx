import React, { useEffect, useState } from 'react';
import { getMedia } from '../../../../services/media.service';
import MediaList from './MediaList';

const MediaListContainer = ({ type, search }: { type: string, search: string }) => {
	const [media, setMedia] = useState([]);
	const [limit] = useState(8);
	const [offset, setOffset] = useState(0);
	const [count, setCount] = useState(0);

	const handleNext = () => {
		if ((offset + limit) < count) {
			setOffset(offset + limit)
		}
	}
	const handlePrev = () => {
		if (offset > 0) {
			setOffset(offset - limit)
		}
	}
	useEffect(() => {
		getMedia({ type: type.toLowerCase(), limit, offset, search }).then(media => {
			const { records, count } = media
			setCount(count)
			setMedia(records)
		})
	}, [type, offset, search, limit]);

	return <MediaList
		media={media}
		limit={limit}
		offset={offset}
		count={count}
		handleNext={handleNext}
		handlePrev={handlePrev}
	/>;
};

export default MediaListContainer;
