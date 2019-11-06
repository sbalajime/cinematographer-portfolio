import React,  { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent:'center', marginTop: 20}}>
                <a href="#portfolio"><span style={{ fontSize: '3vw', fontWeight: 500 }}>Portfolio</span></a>
                <a href="#gallery"><span style={{ fontSize: '3vw', fontWeight: 500, marginLeft: '3vw' }}>Gallery</span></a>
            </div>
        )
    }
}
export default Menu