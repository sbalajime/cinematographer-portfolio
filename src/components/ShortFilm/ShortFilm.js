import React, {Component} from 'react';
import _map from 'lodash/map';

import shortFilms from '../VideoData/data';

class ShortFilm extends Component {
    render(){
        return(
            <div style={{padding: 50}}>
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
                                }}
                            >
                                <a 
                                    href={`https://www.youtube.com/watch?v=${film.videoId}`}
                                    target="_blank"
                                >
                                    <img 
                                        src={`https://img.youtube.com/vi/${film.videoId}/${film.thumbnail}.jpg`} 
                                        height="240"
                                        width="320"
                                    />
                                   {// <div style={{width:350, marginTop: 20, color:'black', fontFamily:'Fjalla One', fontSize: 20}}>{film.title}</div>
                                   }
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