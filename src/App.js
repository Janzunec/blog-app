import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import style from './App.module.css';
import About from './components/about/About';
import Posts from './components/posts/Posts';

function App() {
	return (
		<div className={style.App}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Posts />} />
					<Route path='about' element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
