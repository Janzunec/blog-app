import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../UI/Cards/PostCard';
import style from './Posts.module.css';

const Posts = () => {
	const [data, setData] = useState([
		// {
		// 	post_ID: 1,
		// 	title: 'New graphics card1',
		// 	body: 'New RTX3090Ti was just released',
		// 	uploaded: new Date('29-03-2022T14:48:00.000Z'),
		// },
		// {
		// 	post_ID: 2,
		// 	title: 'New graphics card 2',
		// 	body: 'New RTX3080Ti was just released',
		// 	uploaded: new Date('22-03-2022T11:48:00.000Z'),
		// },
		// {
		// 	post_ID: 3,
		// 	title: 'New graphics card 3',
		// 	body: 'New RTX3070Ti was just released',
		// 	uploaded: new Date('09-04-2022T17:48:00.000Z'),
		// },
	]);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch('http://192.168.1.230:4000/post/all', {
				method: 'GET',
			});
			const fetchedData = await resp.json().then((res) => res);
			setData([...fetchedData]);
		};
		try {
			fetchData();
		} catch (err) {
			console.log(err);
		}
	}, [data]);

	return (
		<Fragment>
			<Link to={'about'}>About</Link>
			<h1>Recent posts</h1>
			<div className={style.postContainer}>
				{data.map((post) => (
					<PostCard
						key={post.post_ID}
						id={post.post_ID}
						title={post.title}
						body={post.body}
						uploaded={post.uploaded}
						// image={post.image}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default React.memo(Posts);
