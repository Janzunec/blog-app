import React from 'react';
import style from './PostCard.module.css';

const PostCard = (props) => {
	return (
		<div className={style.postCard}>
			<div>Slika</div>
			<div>Details</div>
		</div>
	);
};

export default React.memo(PostCard);
