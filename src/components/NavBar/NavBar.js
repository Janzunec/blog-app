import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import style from './NavBar.module.css';
import LogoutBtn from '../UI/Buttons/LogoutBtn';
import AuthContext from '../context/auth-context';

const NavBar = () => {
	const currLocation = useLocation();

	const authCtx = useContext(AuthContext);

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
						{authCtx.user.username}
					</Link>
				)}
				{authCtx.isLoggedIn && <LogoutBtn />}
			</ul>
			<input
				name='search'
				defaultValue=''
				placeholder='Search'
				type='search'
				className={style.searchBar}
			/>
		</div>
	);
};

export default React.memo(NavBar);
