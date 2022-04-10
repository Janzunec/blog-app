import React from 'react';
import { Link } from 'react-router-dom';

const posts = () => {
	return (
		<div>
			<Link to={'about'}>About</Link>
		</div>
	);
};

export default React.memo(posts);
