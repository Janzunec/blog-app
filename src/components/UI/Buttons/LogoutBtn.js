import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import style from './LogoutBtn.module.css';

const LogoutBtn = () => {
	const navigate = useNavigate();

	const authCtx = useContext(AuthContext);

	const logoutHandler = () => {
		authCtx.onLogout();
		navigate('/');
	};
	return (
		<div className={style.logoutBtn} onClick={logoutHandler}>
			<FiLogOut /> Logout
		</div>
	);
};

export default React.memo(LogoutBtn);
