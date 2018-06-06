import React,  { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent:'center'}}>
                <a href="#portfolio"><h3>Portfolio</h3></a>
                <a href="#aboutMe"><h3 style={{ marginLeft: 30}}>About Me</h3></a>
            </div>
        )
    }
}
export default Menu