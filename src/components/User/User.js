import React, { useContext } from 'react';
import AuthContext from '../context/auth-context';

const User = () => {
	const authCtx = useContext(AuthContext);
	const userData = authCtx.user;

	return (
		<div>
			<div>User data for {userData.username} :</div>
			<div>First Name: {userData.firstName} </div>
			<div>Surname: {userData.secondName} </div>
			<div>Username: {userData.username} </div>
			<div>Email: {userData.email} </div>
		</div>
	);
};

export default User;
