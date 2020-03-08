import React,  { Component } from 'react';
import './style.css';
class Menu extends Component {
    render(){
        return(
            <div className="menuContainer" >
                <a href="#portfolio"><span className="menuItem" >Portfolio</span></a>
                <a href="#gallery"><span className="menuItem">Gallery</span></a>
            </div>
        )
    }
}
export default Menu