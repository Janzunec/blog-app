import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import style from './Login.module.css';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameIsValid, setUsernameIsValid] = useState(true);
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [userExists, setUserExists] = useState(true);
	const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);

	const navigate = useNavigate();

	const authCtx = useContext(AuthContext);

	const usernameInputHandler = (e) => {
		if (e.target.value === '') {
			setUsernameIsValid(false);
			return;
		}
		setUsername(e.target.value);
		setUsernameIsValid(true);
	};

	const passwordInputHandler = (e) => {
		if (e.target.value === '') {
			setPasswordIsValid(false);
			return;
		}
		setPassword(e.target.value);
		setPasswordIsValid(true);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setUserExists(true);
		setPasswordIsCorrect(true);
		if (username === '' || password === '') return;
		try {
			const res = await fetch('http://192.168.1.230:4000/user/login', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: `${username}`,
					password: `${password}`,
				}),
			});
			const resData = await res.json().then((data) => data);
			if (!resData.userExists) {
				setUserExists(resData.userExists);
				setPassword('');
				return;
			}
			if (!resData.passwordMatch) {
				setPasswordIsCorrect(resData.passwordMatch);
				setPassword('');

				return;
			}
			const userData = {
				firstName: resData.firstName,
				secondName: resData.secondName,
				username: resData.username,
				email: resData.email,
			};
			authCtx.onLogin(userData);

			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={style.login}>
			{!userExists && (
				<div className={style.errorMsg}>
					User with entered username doesn't exist!
				</div>
			)}
			{!passwordIsCorrect && (
				<div className={style.errorMsg}>
					Entered password is incorrect
				</div>
			)}
			<form onSubmit={submitHandler} className={style.loginForm}>
				<input
					name='username'
					placeholder='Username'
					type='text'
					onChange={usernameInputHandler}
					autoFocus={true}
					className={`${style.userDataInput} ${
						usernameIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='password'
					placeholder='Password'
					type='password'
					value={password}
					onChange={passwordInputHandler}
					className={`${style.userDataInput} ${
						passwordIsValid ? '' : style.invalidInput
					}`}
				/>
				<button type='submit' className={style.loginBtn}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Register;
