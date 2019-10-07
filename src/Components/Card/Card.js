import React, { Component } from 'react';
import data from '../VideoData/data';

class Card extends Component {
    render(){
        const { film, selectFilm } = this.props; 
        return(
            <div id="card" style={{ alignItems:'center', alignSelf:'center', marginRight: 100, position:'relative', zIndex:2}} onClick={() => selectFilm(film)}>
                {/* <a href={`https://www.youtube.com/watch?v=${film.videoId}`} target="_blank"> */}
                    <img 
                        src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`} 
                        height="180vh"
                        width="230vw"
                        id="cardImage"
                    />
                    <div id="content">
                        <div style={{ 
                            position:'relative',
                            top:'15%',
                            color: 'white', 
                            border:'2px solid white',
                            fontFamily: '"Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif',
                            display: 'inline-block',
                            fontSize: film.name.length > 10 ? '1.5vh' : '2vh',
                            fontWeight: 'bold',
                            padding: 15,width:'60%',marginLeft:'13%',textAlign:'center',
                            transform: 'translateY(-50%)',
                            }}
                        >
                            <span style={{ opacity: '1 !important'}}>{film.name}</span>
                        </div>
                    </div>
                {/* </a> */}
            </div>
        )
    }
}

export default Card;