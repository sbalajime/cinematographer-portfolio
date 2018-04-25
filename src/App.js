import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AboutMe from './components/AboutMe/AboutMe';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import ShortFilm from './components/ShortFilm/ShortFilm';



const Links = () => {
	return(
	<div style={styles.menu}>
		<NavLink exact to='/' activeStyle={styles.activeLink} style={styles.menuItems}>Home</NavLink>
		<NavLink to='/gallery' activeStyle={styles.activeLink} style={styles.menuItems}>Gallery</NavLink>
		<NavLink to='/short-films' activeStyle={styles.activeLink} style={styles.menuItems}>Short Films</NavLink>
		<NavLink to='/aboutme' activeStyle={styles.activeLink} style={styles.menuItems}>About Me</NavLink>
	</div>)
}
class App extends Component {
  render() {
    return (
      	<div className="App">
			<Router>
				<div>
					<Links />
					<Route exact path='/' component={Home}/>
					<Route path='/gallery' component={Gallery} />
					<Route path='/short-films' component={ShortFilm} />
					<Route path='/aboutme' component={AboutMe} />
				</div>
			</Router>
      	</div>
    );
  }
}

const styles = {
	menu:{
		display: 'flex',
		justifyContent:'flex-end',
		fontFamily: 'Fjalla One',
		fontWeight: 500,
		fontSize: 35,
		marginTop: 20,
		color: '#1a8b77',
		textDecoration: 'none' 
	},
	menuItems:{
		marginRight:25,
		color: '#1a8b77 !important',
		textDecoration: 'none !important'
	
	},
	activeStyle:{
		color: 'red'
	}
}
export default App;
