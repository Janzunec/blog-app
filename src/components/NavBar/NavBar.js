import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import AuthContext from '../context/auth-context';
import style from './NavBar.module.css';

const NavBar = () => {
	const currLocation = useLocation();

	const authCtx = useContext(AuthContext);

	const navigate = useNavigate();

	const logoutHandler = () => {
		authCtx.onLogout();
		navigate('/');
	};

	return (
		<div className={style.navbar}>
			<ul className={style.links}>
				<Link
					to='/'
					className={`${style.link} ${
						currLocation.pathname === '/' ? style.activePage : ''
					}`}
				>
					Posts
				</Link>
				<Link
					to='/about'
					className={`${style.link} ${
						currLocation.pathname === '/about'
							? style.activePage
							: ''
					}`}
				>
					About
				</Link>
				{!authCtx.isLoggedIn && (
					<Link
						to='/login'
						className={`${style.link} ${
							currLocation.pathname === '/login'
								? style.activePage
								: ''
						}`}
					>
						Login
					</Link>
				)}
				{authCtx.isLoggedIn && (
					<Link
						to='/user'
						className={`${style.link} ${
							currLocation.pathname === '/user'
								? style.activePage
								: ''
						}`}
					>
						User
					</Link>
				)}
				{authCtx.isLoggedIn && (
					<FiLogOut
						className={style.logoutBtn}
						onClick={logoutHandler}
					/>
				)}
			</ul>
			<input
				name='search'
				defaultValue=''
				placeholder='Search'
				className={style.searchBar}
			/>
		</div>
	);
};

export default React.memo(NavBar);
