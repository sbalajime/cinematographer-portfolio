import React, { Component } from 'react';
import './App.css';
import Menu from '../src/Components/Menu/Menu';
import AboutMe from '../src/Components/AboutMe/AboutMe';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import { configureAnchors } from 'react-scrollable-anchor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import newData from './Components/newData';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from "react-photo-gallery";
import Modal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';
import ReactRevealText from 'react-reveal-text';
import photos from './Components/photos';

library.add(faIgloo)
library.add(faChevronRight)
library.add(faChevronLeft)


configureAnchors({ offset: 0, scrollDuration: 700 })

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedFilm: {},
			photo: ''
		}
	}

	selectFilm = film => {
		const { selectedFilm } = this.state;
		if (film && (film.name !== selectedFilm.name)) {
			this.setState({ selectedFilm: {} }, () => this.setState({ selectedFilm: film }, () => { window.location.href = `${window.location.origin}/#${film.name}` }))
			// setTimeout(() => {window.location.href = `${window.location.origin}/#${film.name}`})
		} else this.setState({ selectedFilm: {} })
	}

	render() {
		const { selectedFilm } = this.state;
		console.log("selectedFilm", selectedFilm, 'selectedPhoto', this.state.selectedPhoto);
		return (
			<div className="appWrapper">
				<div className="mainContainer">
					<Menu />
					<AboutMe />
				</div>
				<ScrollableAnchor id={'portfolio'}>
					<div className="portfolioSection">
						<center className="menuItem">Portfolio</center>
						{Object.keys(newData).map((data, index) => <Portfolio data={newData[data]} key={index} title={data} selectedFilm={selectedFilm} selectFilm={this.selectFilm} />)}
					</div>
				</ScrollableAnchor>
				<ScrollableAnchor id={'gallery'}>
					<div style={{ height: '80vh', overflowY: 'hidden' }}>
						{/* <center style={{fontSize:'3vw', marginBottom:50}}>Awards & Recognition</center>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>i) Got award for best cinematographer</div>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>ii) Best shortfilm</div>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>ii) Best Colorist</div> */}
						<center style={{ fontSize: '3vw', marginBottom: 50 }}>Gallery</center>
						<Gallery photos={photos} direction={"row"} onClick={(e, { photo }) => { console.log('photot', e, e.target.getBoundingClientRect()); this.setState({ selectedPhoto: photo.src }) }} />

					</div>
				</ScrollableAnchor>
				 <div style={{ visibility:this.state.selectedPhoto ? 'visible':'hidden', 
				 opacity:this.state.selectedPhoto ? 1 : 0,transition:'visibility 0.3s cubic-bezier(0, 0, 1, 1),opacity 0.3s  cubic-bezier(0, 0, 1, 1)', 
				 width: '100vw', 
				 height: '100vh', 
				 position: 'fixed', 
				 top: 0, 
				 backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
						<div><span style={{ fontSize: '2vw', color: 'white', fontWeight:'bold',position: 'fixed', top: '2%', right: '2%', zIndex: 6, cursor: 'pointer' }} onClick={() => this.setState({ selectedPhoto: '' })}>X</span><img id="gallery-image" src={this.state.selectedPhoto} /></div></div> 
				
				{/* <Modal isOpen={this.state.selectedPhoto} style={{backgroundColor:'black', width:'auto'}}>
				 	<div>
				 	<IoIosCloseCircle style={{height:'2vw', width:'2vw', color:'red', float:'right'}} onClick={() => this.setState({selectedPhoto:''})}/>
				 <img src={this.state.selectedPhoto}  />	
				 	</div>				
				 </Modal>									 */}
				
			</div>
		);
	}
}

export default App;
