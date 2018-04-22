import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AboutMe from './components/AboutMe/AboutMe';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import ShortFilm from './components/ShortFilm/ShortFilm';



const Links = () => {
	return(
	<div>
		<Link to='/'>Home</Link>
		<Link to='/gallery'>Gallery</Link>
		<Link to='/short-films'>Short Films</Link>
		<Link to='/aboutme'>About Me</Link>
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

export default App;
