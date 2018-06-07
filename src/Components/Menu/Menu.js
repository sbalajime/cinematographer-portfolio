import React,  { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent:'center'}}>
                <a href="#portfolio"><h2>Portfolio</h2></a>
                <a href="#aboutMe"><h2 style={{ marginLeft: 30}}>About Me</h2></a>
            </div>
        )
    }
}
export default Menu