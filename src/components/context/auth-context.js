import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
	user: {},
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (userData) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const storageLoggedIn = localStorage.getItem('isLoggedIn');
		if (storageLoggedIn) {
			setIsLoggedIn(storageLoggedIn);
			setUser(JSON.parse(localStorage.getItem('user')));
		}
	}, []);

	const logoutHandler = () => {
		setIsLoggedIn(false);
		setUser({});
		localStorage.removeItem('user');
		localStorage.removeItem('isLoggedIn');
	};

	const loginHandler = (userData) => {
		setIsLoggedIn(true);
		setUser(userData);
		localStorage.setItem('isLoggedIn', true);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
