import React, { Component } from 'react';
import data from '../VideoData/data';

class Card extends Component {
    render(){
        const { film } = this.props; 
        return(
            <div>
            <div id="card" style={{ margin: 20 }}>
                <img 
                    src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`} 
                    height="240"
                    width="320"
                />
                <div id="content">
                    <div style={{ color: 'red', border:'1px solid black', justifyContent: 'center'}}>
                        <h3>{film.title}</h3>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Card;