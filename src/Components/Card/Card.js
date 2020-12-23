import React, { Component } from 'react';
import './style.css';

class Card extends Component {
    render() {
        const { film, selectFilm } = this.props;
        return (
            <div id="card" onClick={() => selectFilm(film)}>
                <img
                    alt="video"
                    src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`}
                    id="cardImage"
                />
                <div id="content">
                    <div className={`filmNameContainer ${film.name.length >= 10 ? `longFilmName` : ``}`}>
                        <span className="filmName">{film.name}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;