import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>Posts</Link>
				</li>
				<li>
					<Link to='about'>About</Link>
				</li>
				<li>
					<Link to='login'>Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default React.memo(NavBar);
