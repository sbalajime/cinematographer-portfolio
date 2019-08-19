import React, { Component } from 'react';
import data from '../VideoData/data';

class Card extends Component {
    render(){
        const { film, selectFilm } = this.props; 
        return(
            <div id="card" style={{ alignItems:'center', alignSelf:'center', marginRight: 100 }} onClick={() => selectFilm(film)}>
                {/* <a href={`https://www.youtube.com/watch?v=${film.videoId}`} target="_blank"> */}
                    <img 
                        src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`} 
                        height="180vh"
                        width="230vw"
                        id="cardImage"
                    />
                    <div id="content">
                        <div style={{ 
                            color: 'white', 
                            border:'2px solid white',
                            fontFamily: '"Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif',
                            display: 'inline-block',
                            fontSize: '2vw',
                            fontWeight: 500,
                            padding: 15,
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            }}
                        >
                            <span style={{ opacity: '1 !important'}}>{film.title}</span>
                        </div>
                    </div>
                {/* </a> */}
            </div>
        )
    }
}

export default Card;