import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../src/Components/Menu/Menu';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: 0, scrollDuration: 700})

class App extends Component {
	render() {
		return (
			<div>
				<div className="mainContainer">
				<video autoPlay muted loop id="myVideo">
					<source src="https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
				</video>
					<span style={{display:'inline-block', fontSize: 40, fontWeight: 400 }}>YUVAN SELVA</span>
					<span style={{ display: 'inline-block', fontSize: 25, fontWeight: 100 }}>CINEMATOGRAPHER | DI COLORIST | EDITOR</span>
					<Menu />
				</div>
				<div style={{ padding: 50}}>
					<Portfolio />
				</div>
				<div style={{ padding: 50 }}> 
					<AboutMe />
				</div>				
			</div>
		);
	}
}

export default App;
