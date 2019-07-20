import React, { Component } from 'react';
import './App.css';
import Menu from '../src/Components/Menu/Menu';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import { configureAnchors } from 'react-scrollable-anchor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import newData from './Components/newData';

library.add(faIgloo)
library.add(faChevronRight)
library.add(faChevronLeft)


configureAnchors({offset: 0, scrollDuration: 700})

class App extends Component {
	render() {
		return (
			<div>
				<div className="mainContainer">
					<span style={{display:'inline-block', fontSize: 40, fontWeight: 400 }}>YUVAN SELVA</span>
					<span style={{ display: 'inline-block', fontSize: 25, fontWeight: 100 }}>CINEMATOGRAPHER | DI COLORIST | EDITOR</span>
					<Menu />
				</div>
				<div style={{ padding: 50}}>
				{Object.keys(newData).map(data =>  <Portfolio data={newData[data]} title={data}/>)}
				</div>
				<div style={{ padding: 50 }}> 
					<AboutMe />
				</div>
				<div style={{ textAlign: 'center', padding: 5, paddingBottom: 40, zIndex: 99999999 }}>
					<span><a href="https://sbalaji.me" target="_blank"><span style={{ color: '#aaa'}}>Made by</span> Balaji S</a></span>
				</div>				
			</div>
		);
	}
}

export default App;
