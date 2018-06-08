import React,  { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent:'center', marginTop: 20}}>
                <a href="#portfolio"><span style={{ fontSize: 35, fontWeight: 100 }}>PORTFOLIO</span></a>
                <a href="#aboutMe"><span style={{ fontSize: 35, fontWeight: 100, marginLeft: 20 }}>ABOUT ME</span></a>
            </div>
        )
    }
}
export default Menu