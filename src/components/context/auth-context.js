import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
	user: {},
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (userData) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [user, setUser] = useState({});

	const logoutHandler = () => {
		setIsLoggedIn(false);
		setUser({});
	};

	const loginHandler = (userData) => {
		setIsLoggedIn(true);
		setUser(userData);
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
