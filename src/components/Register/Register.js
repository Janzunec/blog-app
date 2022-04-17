import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstNameIsValid, setFirstNameIsValid] = useState(true);
	const [secondNameIsValid, setSecondNameIsValid] = useState(true);
	const [usernameIsValid, setUsernameIsValid] = useState(true);
	const [emailIsValid, setEmailIsValid] = useState(true);
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const firstNameInputHandler = (e) => {
		if (e.target.value === '') {
			setFirstNameIsValid(false);
			return;
		}
		setFirstName(e.target.value);
		setFirstNameIsValid(true);
	};

	const secondNameInputHandler = (e) => {
		if (e.target.value === '') {
			setSecondNameIsValid(false);
			return;
		}
		setSecondName(e.target.value);
		setSecondNameIsValid(true);
	};

	const usernameInputHandler = (e) => {
		if (e.target.value === '') {
			setUsernameIsValid(false);
			return;
		}
		setUsername(e.target.value);
		setUsernameIsValid(true);
	};

	const emailInputHandler = (e) => {
		if (e.target.value === '') {
			setEmailIsValid(false);
			return;
		}
		setEmail(e.target.value);
		setEmailIsValid(true);
	};

	const passwordInputHandler = (e) => {
		if (e.target.value === '') {
			setPasswordIsValid(false);
			return;
		}
		setPassword(e.target.value);
		setPasswordIsValid(true);
	};

	const confirmPasswordInputHandler = (e) => {
		if (e.target.value === '') {
			setConfirmPasswordIsValid(false);
			return;
		}
		setConfirmPassword(e.target.value);
		setConfirmPasswordIsValid(true);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setError(false);
		console.log(
			firstName,
			secondName,
			username,
			email,
			password,
			confirmPassword
		);
		if (
			username === '' ||
			password === '' ||
			firstName === '' ||
			secondName === '' ||
			email === '' ||
			confirmPassword === ''
		)
			return;
		if (password !== confirmPassword) {
			setConfirmPasswordIsValid(false);
			return;
		}
		try {
			const res = await fetch('http://192.168.1.230:4000/user/add', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: `${firstName}`,
					secondName: `${secondName}`,
					username: `${username}`,
					email: `${email}`,
					password: `${password}`,
				}),
			});
			const resData = await res.json().then((data) => data);
			if (resData.response !== 'success') {
				setError(resData.response);
				return;
			}

			navigate('/login');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={style.login}>
			{error && <div>{error}</div>}
			<form onSubmit={submitHandler} className={style.loginForm}>
				<input
					name='firstName'
					placeholder='First Name'
					type='text'
					onChange={firstNameInputHandler}
					autoFocus={true}
					className={`${style.userDataInput} ${
						firstNameIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='secondName'
					placeholder='Surname'
					type='text'
					onChange={secondNameInputHandler}
					className={`${style.userDataInput} ${
						secondNameIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='username'
					placeholder='Username'
					type='text'
					onChange={usernameInputHandler}
					className={`${style.userDataInput} ${
						usernameIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='email'
					placeholder='Email'
					type='email'
					onChange={emailInputHandler}
					className={`${style.userDataInput} ${
						emailIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='password'
					placeholder='Password'
					type='password'
					onChange={passwordInputHandler}
					className={`${style.userDataInput} ${
						passwordIsValid ? '' : style.invalidInput
					}`}
				/>
				<input
					name='confirmPassword'
					placeholder='Confirm password'
					type='password'
					onChange={confirmPasswordInputHandler}
					className={`${style.userDataInput} ${
						confirmPasswordIsValid ? '' : style.invalidInput
					}`}
				/>
				<button type='submit' className={style.loginBtn}>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
