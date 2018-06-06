import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../src/Components/Menu/Menu';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Portfolio from '../src/Components/Portfolio/Portfolio';
class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<AboutMe />
				<Portfolio />
			</div>
		);
	}
}

export default App;
