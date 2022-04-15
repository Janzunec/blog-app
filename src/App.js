import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import About from './components/About/About';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Posts from './components/posts/Posts';
import Register from './components/Register/Register';
import User from './components/User/User';

function App() {
	return (
		<div className={style.App}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Posts />} />
					<Route path='about' element={<About />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='user' element={<User />} />
				</Routes>
			</BrowserRouter>
			<div className={style.footer}>
				Copyright &copy; 2022 - Website By Jan Žunec
			</div>
		</div>
	);
}

export default App;
