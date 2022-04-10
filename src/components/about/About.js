import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<Link to={'/'}>Posts</Link>
		</div>
	);
};

export default React.memo(About);
