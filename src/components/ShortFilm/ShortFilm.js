import React, {Component} from 'react';
import _map from 'lodash/map';

import shortFilms from '../VideoData/data';

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
                            <div 
                                key={film.id} 
                                style={{
                                    backgroundColor: 'rgb(195, 195, 195)', 
                                    textAlign:'center', 
                                    borderRadius:25,
                                    padding: 20,
                                    margin: 10,
                                    paddingTop: 32
                                }}
                            >
                                <a 
                                    href={`https://www.youtube.com/watch?v=${film.videoId}`}
                                    target="_blank"
                                >
                                    <img 
                                        src={`https://img.youtube.com/vi/${film.videoId}/0.jpg`} 
                                        style={{borderRadius:10}}
                                        height="240"
                                        width="320"
                                    />
                                    <div style={{width:350, marginTop: 20, color:'black', fontFamily:'Fjalla One', fontSize: 20}}>{film.title}</div>
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