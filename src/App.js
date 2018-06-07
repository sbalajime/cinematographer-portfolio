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
				<div style={{ marginTop:25, display:'flex', flexDirection:'column', justifyContent:'center', textAlign: 'center' }}>
					<span style={{display:'inline-block', fontSize: 40, fontWeight: 800 }}>Yuvan Selva</span>
					<span style={{ display: 'inline-block', fontSize: 30, fontWeight: 400 }}>Cinematographer | DI Colorist | Editor</span>
				</div>
				<Menu />
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
