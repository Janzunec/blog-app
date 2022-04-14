import React from 'react';
import style from './PostCard.module.css';

const PostCard = (props) => {
	const defaultLang = window.navigator.language;
	const today = new Date();
	const dateStr = today.toLocaleString(defaultLang, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	console.log(dateStr);
	return (
		<div
			className={`${style.postCard} ${
				props.index === 0 ? style.latestPostCard : ''
			}`}
		>
			<div>
				<img
					src={props.image}
					className={`${style.postCardImage} ${
						props.index === 0 ? style.latestImage : ''
					}`}
					alt={props.title}
				/>
			</div>
			<div
				className={`${style.postCardDetails} ${
					props.index === 0 ? style.latestDetails : ''
				}`}
			>
				<div
					className={style.postCardDate}
				>{`Category - ${props.uploaded.toLocaleString(defaultLang, {
					month: 'short',
					day: 'numeric',
					year: 'numeric',
					// hour: 'numeric',
					// minute: 'numeric',
				})}`}</div>
				<div className={style.postCardTitle}>{props.title}</div>
				<div
					className={`${style.postCardBody} ${
						props.index === 0 ? style.latestBody : ''
					}`}
				>
					{props.body}
				</div>
				<div className={style.postCardUser}>
					<div>
						<img
							src='https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg'
							height='65px'
							width='65px'
							className={style.userImage}
							alt='Profile'
						/>
					</div>
					<div>
						<div>{`${props.user.username} - ${props.user.firstName} ${props.user.secondName}`}</div>
						<div>{props.user.email}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(PostCard);
