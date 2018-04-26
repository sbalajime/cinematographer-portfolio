import React, {Component} from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '240',
    width: '320',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

class ShortFilm extends Component {
    render(){
        return(
            <div style={{padding: 50}}>
                <h1>These are the short films I have worked as a cinematographer.</h1>
                <YouTube
                    videoId="e2zlA4JHa_8"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default ShortFilm;