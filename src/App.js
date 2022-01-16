import React, {Component, useCallback} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import NavBar from './components/NavBar'
import Card from './components/Card';
import Results from './components/Results';
import Login from './components/Login'
import './styles/index.css';
import './styles/NavBar.css';

var total_score = 0;
const App = () => {

	const set_score = useCallback((score) => {
		total_score = score;

	  }, []);


	const navigate = useNavigate()

		return(
			<div>
				<NavBar></NavBar>
					<Routes>
						<Route exact path="/login" element={<Login navigate={navigate} />} />
						<Route exact path="/card" element={<Card onResult={set_score} navigate={navigate}/>} />
						<Route exact path="/results" element={<Results value={total_score}/>}  />
					</Routes>

			</div>

		);

}

export default App;