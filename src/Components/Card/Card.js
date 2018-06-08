import React, { Component } from 'react';
import data from '../VideoData/data';

class Card extends Component {
    render(){
        const { film } = this.props; 
        return(
            <div>
            <div id="card" style={{ margin: 20 }}>
                <a href={`https://www.youtube.com/watch?v=${film.videoId}`} target="_blank">
                    <img 
                        src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`} 
                        height="240"
                        width="320"
                    />
                    <div id="content">
                        <div style={{ 
                            color: 'white', 
                            border:'2px solid white',
                            fontFamily: '"Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif',
                            display: 'inline-block',
                            fontSize: 25,
                            fontWeight: 500,
                            padding: 15,
                            marginTop: 20
                            }}
                        >
                            <span style={{ opacity: '1 !important'}}>{film.title}</span>
                        </div>
                    </div>
                </a>
            </div>
            </div>
        )
    }
}

export default Card;