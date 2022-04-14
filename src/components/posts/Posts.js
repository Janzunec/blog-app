import React, { useState, useEffect, Fragment } from 'react';
import PostCard from '../UI/Cards/PostCard';
import style from './Posts.module.css';

const Posts = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch('http://192.168.1.230:4000/post/all', {
				method: 'GET',
			});
			const fetchedData = await resp.json().then((res) => res);
			const transformedData = fetchedData.reverse().map((post) => {
				post.uploaded = new Date(`${post.uploaded}`);
				return post;
			});
			console.log(transformedData);
			setData([...transformedData]);
		};
		try {
			fetchData();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<Fragment>
			<div className={style.postContainer}>
				{data.map((post, i) => (
					<PostCard
						key={post.post_ID}
						id={post.post_ID}
						index={i}
						title={post.title}
						body={post.body}
						uploaded={post.uploaded}
						image={post.image}
						user={{
							userID: post.User_ID,
							firstName: post.firstName,
							secondName: post.secondName,
							username: post.username,
							email: post.email,
						}}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default React.memo(Posts);
