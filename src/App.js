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
import ScrollableAnchor from 'react-scrollable-anchor';

library.add(faIgloo)
library.add(faChevronRight)
library.add(faChevronLeft)


configureAnchors({offset: 0, scrollDuration: 700})

class App extends Component {

	render() {
		return (
			<div>
				<div className="mainContainer">
					<Menu />
					<AboutMe />
				</div>
				<ScrollableAnchor id={'portfolio'}>
				<div style={{ padding: 50}}>
					<center style={{fontSize:40}}>Portfolio</center>
					{Object.keys(newData).map(data =>  <Portfolio data={newData[data]} title={data} />)}
				</div>				
				</ScrollableAnchor>	
				<ScrollableAnchor id={'achievements'}>
					<div style={{height:'80vh', padding:50}}>
						<center style={{fontSize:35, marginBottom:50}}>Awards & Recognition</center>
						<div style={{fontSize:25, marginBottom:25}}>i) Got award for best cinematographer</div>
						<div style={{fontSize:25, marginBottom:25}}>ii) Best shortfilm</div>
						<div style={{fontSize:25, marginBottom:25}}>ii) Best Colorist</div>
					</div>
				</ScrollableAnchor>							
				<div style={{ textAlign: 'center', padding: 5, paddingBottom: 40, zIndex: 99999999 }}>
					<span><a href="https://sbalaji.me" target="_blank"><span style={{ color: '#aaa'}}>Made by</span> Balaji S</a></span>
				</div>				
			</div>
		);
	}
}

export default App;
