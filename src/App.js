import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AboutMe from './components/AboutMe/AboutMe';
import Gallery from './components/Gallery/Gallery';
import ShortFilm from './components/ShortFilm/ShortFilm';



const Links = () => {
	return(
	<div style={styles.menu} className='links'>
		<NavLink activeStyle={{color: 'red'}} style={{ color:'black'}} exact to='/'>About Me</NavLink>
		<NavLink activeStyle={{color: 'red'}} style={{ color:'black'}} exact to='/gallery'>Gallery</NavLink>
		<NavLink activeStyle={{color: 'red'}} style={{ color:'black'}} exact to='/short-films'>Short Films</NavLink>
	</div>)
}
class App extends Component {
  render() {
    return (
      	<div className="App">
			<Router>
				<div>
					<Links />
					<Route exact path='/' component={AboutMe}/>
					<Route path='/gallery' component={Gallery} />
					<Route path='/short-films' component={ShortFilm} />
				</div>
			</Router>
      	</div>
    );
  }
}

const styles = {
	menu:{
		display: 'flex',
		justifyContent:'center',
		fontFamily: 'Fjalla One',
		fontWeight: 500,
		fontSize: 35,
		paddingTop: 20,
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
