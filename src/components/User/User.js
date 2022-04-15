import React, { useContext } from 'react';
import AuthContext from '../context/auth-context';
import LogoutBtn from '../UI/Buttons/LogoutBtn';
import style from './User.module.css';

const User = () => {
	const authCtx = useContext(AuthContext);
	const userData = authCtx.user;

	return (
		<div className={style.user}>
			<div>User data for {userData.username} :</div>
			<div>First Name: {userData.firstName} </div>
			<div>Surname: {userData.secondName} </div>
			<div>Username: {userData.username} </div>
			<div>Email: {userData.email} </div>
			<LogoutBtn />
		</div>
	);
};

export default User;
