import React, { Component } from 'react';
import { IoIosCloseCircle, IoIosPlay } from "react-icons/io";
import './style.css';
import {s3Bucket} from '../../config';
class Description extends Component {

    render() {
        const { selectedFilm, close } = this.props;
        return (
            selectedFilm.name ?
                <div id={selectedFilm.name}>
                    <div id="videoDiv">
                        <div id="videoBlock">
                            <video loop autoPlay >
                                <source src={`${s3Bucket}/preview/${selectedFilm.year}/${selectedFilm.sampleVideo}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                            <div id="videoMessage">
                                <div className="flexRow">
                                    <div className="filmDetailsContainer">
                                        <div className="descFirstRow flexRowACenter" >
                                            <div className="descFilmName" >
                                                {selectedFilm.name}
                                            </div>
                                            <div className="descCloseContainer" >
                                                <IoIosCloseCircle className="descCloseIcon" onClick={() => close()} />
                                            </div>
                                        </div>
                                        <div className="descFirstRow flexRowACenter" >


                                            <div className="descFilmType">{selectedFilm.type}</div>
                                            <div className="descDuration">
                                                Duration: {selectedFilm.duration}
                                            </div>
                                            {selectedFilm.trailer ? <div className="descFilmType">
                                                <button className="playButton"
                                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${selectedFilm.trailer}`)}>Trailer</button> </div> : null}

                                            <div className="descFilmType">
                                                <button
                                                    className="descPlayButton"
                                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${selectedFilm.videoId}`)}>
                                                    <IoIosPlay
                                                        className="descPlayIcon"
                                                    /> Play
                                            </button>
                                            </div>
                                        </div>
                                        <div className="descBody">
                                            Crew: <div className="flexRowWrap">
                                                <CrewDetails crew={selectedFilm.crew} />
                                            </div>
                                        </div>
                                        <div className="descBody">
                                            Synopsis:
                                        <div className="descBodyText">{selectedFilm.summary}</div>
                                        </div>
                                        {selectedFilm.personalNote &&
                                            <div className="descBody">
                                                Personal Notes:
                                        <div className="descBodyText">{selectedFilm.personalNote}</div>
                                            </div>}
                                        <div className="descBody">
                                            Trivia:
                                        <div className="descBodyText">{selectedFilm.trivia}</div>
                                        </div>
                                    </div>
                                    <div className="descRightSec">


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div />
        )
    }
}

const CrewDetails = props => {
    const { crew } = props;
    return (Object.keys(crew).map((key, index) =>
        <div style={{ marginLeft: 30 }} key={index}>
            <span className="crewDesignation">{key}:</span>
            <span className="crewMember">{typeof (crew[key]) === "object" ? crew[key].join(', ') : crew[key]}</span>
        </div>
    ))
}

export default Description;