import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import MyJourney from './Components/MyJourney';
import { configureAnchors } from 'react-scrollable-anchor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import newData from './Components/newData';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from "react-photo-gallery";
import photos from './Components/photos';
import spot from './Components/spot'

library.add(faIgloo)
library.add(faChevronRight)
library.add(faChevronLeft)


configureAnchors({ offset: 0, scrollDuration: 700 })

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedFilm: {},
			photo: '',
			gallery: ""
		}
	}

	selectFilm = film => {
		const { selectedFilm } = this.state;
		if (film && (film.name !== selectedFilm.name)) {
			this.setState({ selectedFilm: {} }, () => this.setState({ selectedFilm: film }, () => { window.location.href = `${window.location.origin}/#${film.name}` }))
			// setTimeout(() => {window.location.href = `${window.location.origin}/#${film.name}`})
		} else this.setState({ selectedFilm: {} })
	}

	handleClick = (e) => {
		const { value } = e.target
		this.setState({ gallery: value })
	}

	render() {
		const { selectedFilm, gallery } = this.state;
		return (
			<div className="appWrapper">
				<div className="mainContainer">
					<AboutMe />
				</div>
				<ScrollableAnchor id={'portfolio'}>
					<div className="portfolioSection">
						<center className="menuItem">Portfolio</center>
						{Object.keys(newData).map((data, index) => <Portfolio data={newData[data]} key={index} title={data} selectedFilm={selectedFilm} selectFilm={this.selectFilm} />)}
					</div>
				</ScrollableAnchor>
				<ScrollableAnchor id={'gallery'}>
					<div>
						{/* <center style={{fontSize:'3vw', marginBottom:50}}>Awards & Recognition</center>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>i) Got award for best cinematographer</div>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>ii) Best shortfilm</div>
						<div style={{fontSize:'2.5vw', marginBottom:25}}>ii) Best Colorist</div> */}
						<center className="menuItem">Gallery</center>
						<div className="btnContainer">
							<button value="photos" onClick={this.handleClick}>Guest, Workshops</button>
							<button value="spot" onClick={this.handleClick}>Spots</button>
						</div>
						{gallery === "photos" ?
							<Gallery photos={photos} direction={"row"} onClick={(e, { photo }) => { console.log('photot', e, e.target.getBoundingClientRect()); this.setState({ selectedPhoto: photo.src.replace('thumbnail', 'original') }) }} />
							: <Gallery photos={spot} direction={"row"} onClick={(e, { photo }) => { console.log('photot', e, e.target.getBoundingClientRect()); this.setState({ selectedPhoto: photo.src.replace('thumbnail', 'original') }) }} />
						}

					</div>
				</ScrollableAnchor>
				<div style={{
					visibility: this.state.selectedPhoto ? 'visible' : 'hidden',
					opacity: this.state.selectedPhoto ? 1 : 0, transition: 'visibility 0.3s cubic-bezier(0, 0, 1, 1),opacity 0.3s  cubic-bezier(0, 0, 1, 1)',
					width: '100%',
					height: '100%',
					backgroundImage: 'contain',
					position: 'fixed',
					top: 0,
					backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
				}}>
					<div><span style={{ fontSize: '2vw', color: 'white', fontWeight: 'bold', position: 'fixed', top: '2%', right: '2%', zIndex: 6, cursor: 'pointer' }} onClick={() => this.setState({ selectedPhoto: '' })}>X</span><img alt="galleryimg" id="gallery-image" src={this.state.selectedPhoto} style={{objectFit:'contain', maxHeight:'90vh'}}/></div>
				</div>
				<MyJourney />

			</div >
		);
	}
}

export default App;
