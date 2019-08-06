import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Description extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { selectedFilm } = this.props;
        return (
            selectedFilm.name ?
                <div style={{ height: '80vh', backgroundColor: '#002' }} id="videoDiv">
                    <div id="videoBlock">
                        <video loop autoPlay >
                            <source src="2003-1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div id="videoMessage">
                            <div style={{width: '60%'}}>
                                <span style={{ fontSize: 30, marginRight: 50 }}>
                                    {selectedFilm.name}
                                </span>
                                <span>
                                    Duration: {selectedFilm.duration}
                                </span>
                                <div style={{ fontSize: 20 }}>
                                    Crew: <span style={{ fontSize: 15 }}>{JSON.stringify(selectedFilm.crew)}</span>
                                </div>
                                <div style={{ fontSize: 20 }}>
                                    Summary:
                   <p style={{ fontSize: 15 }}>{selectedFilm.summary}</p>
                                </div>
                                <div style={{ fontSize: 20 }}>
                                    Personal Notes:
                   <p style={{ fontSize: 15 }}>{selectedFilm.personalNote}</p>
                                </div>
                                <div style={{ fontSize: 20 }}>
                                    Trivia:
                   <p style={{ fontSize: 15 }}>{selectedFilm.trivia}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div />
        )
    }
}

export default Description;