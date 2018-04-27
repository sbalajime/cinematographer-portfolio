import React, {Component} from 'react';
import YouTube from 'react-youtube';
import _map from 'lodash/map';

import shortFilms from '../VideoData/data';

const opts = {
    height: '240',
    width: '350',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

class ShortFilm extends Component {
    render(){
        console.log('shortfilm data', shortFilms)
        return(
            <div style={{padding: 50}}>
                <h1>These are the short films I have worked as a cinematographer.</h1>
                <div 
                    style={{
                        display:'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between',
                        flexWrap:'wrap'
                    }}
                >
                    {_map(shortFilms, film => {
                        console.log('film.id', film.videoId)
                        return(
                            <div key={film.id} style={{marginTop: 60}}>
                                <a 
                                    href={`https://www.youtube.com/watch?v=${film.videoId}`}
                                    target="_blank"
                                >
                                {/*<YouTube
                                    videoId={film.videoId}
                                    opts={opts}
                                    onReady={this._onReady}
                                />*/}
                                    <img 
                                        src={`https://img.youtube.com/vi/${film.videoId}/0.jpg`} 
                                        alt="shortFilm"
                                        height="240"
                                        width="320"
                                    />
                                </a>
                            </div>
                        )

                    })}
                </div>
            </div>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default ShortFilm;