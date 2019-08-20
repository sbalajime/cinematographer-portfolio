import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { IoIosCloseCircle,IoIosPlay, IoIosFilm } from "react-icons/io";

class Description extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { selectedFilm, close } = this.props;
        return (
            selectedFilm.name ?
                <div style={{ height: '80vh', backgroundColor: '#002' }} id="videoDiv">
                    <div id="videoBlock">
                        <video loop autoPlay >
                            <source src={selectedFilm.sampleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div id="videoMessage">
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <div style={{width: '80%'}}>
                                    <div style={{margin:'0px 0 20px 0', display:'flex', flexDirection:'row', marginTop:'1%', alignItems:'center'}}>
                                        <div style={{ fontSize: '2.5vw', marginRight: 50, fontWeight: 'bold' }}>
                                            {selectedFilm.name}
                                        </div>
                                        <div style={{fontSize: '2vw', marginRight: 50}}>{selectedFilm.type}</div>
                                        <div style={{ marginRight: 50, fontSize:'1.3vw'}}>
                                            Duration: {selectedFilm.duration}
                                        </div>
                                        {selectedFilm.trailer ? 
                                            <button style={{
                                                border:'0px', 
                                                borderRadius:'10px', 
                                                backgroundColor:'black', 
                                                color:'white', 
                                                height:'5vh', 
                                                fontSize:'1.3vw',
                                                width: '8vw', 
                                                display:'flex', 
                                                flexDirection:'row', 
                                                justifyContent:'center', 
                                                alignItems:'center', cursor:'pointer'}}
                                                onClick={()=>window.open(`https://www.youtube.com/watch?v=${selectedFilm.trailer}`)}><IoIosFilm style={{height:'1.5vw', width:'1.5vw', color:'red', marginRight:'1vw'}} />Trailer</button> : null}    
                                                                  
                                        
                                    </div>
                                    <div style={{ fontSize: '2vw',margin:'20px 0 20px 0' }}>
                                        Crew: <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                        <CrewDetails crew={selectedFilm.crew} />
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '2vw',margin:'20px 0 20px 0' }}>
                                        Synopsis:
                                        <div style={{ fontSize: '1.3vw', marginLeft: 25 }}>{selectedFilm.summary}</div>
                                    </div>
                                    <div style={{ fontSize: '2vw',margin:'20px 0 20px 0' }}>
                                        Personal Notes:
                    <div style={{ fontSize: '1.3vw', marginLeft: 25 }}>{selectedFilm.personalNote}</div>
                                    </div>
                                    <div style={{ fontSize: '2vw', margin:'20px 0 20px 0' }}>
                                        Trivia:
                    <div style={{ fontSize: '1.3vw', marginLeft: 25 }}>{selectedFilm.trivia}</div>
                                    </div>
                                </div>                            
                                <div style={{width:'20%', height:'80vh',display:'flex', flexDirection:'column'}}>
                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'80%', marginRight:'10vw', marginTop:'5%'}} >
                                        <IoIosCloseCircle style={{height:'2vw', width:'2vw', color:'red'}} onClick={() => close()}/>
                                    </div>
                                   
                                    <div style={{marginTop:'7%'}}>
                                        <button 
                                            style={{
                                                height:'10vh', 
                                                width:'80%', 
                                                display:'flex', 
                                                flexDirection:'row', 
                                                alignItems:'center', 
                                                justifyContent:'center', 
                                                fontSize: '2vw', 
                                                color:'white', 
                                                backgroundColor:'black', 
                                                border:'0px', 
                                                borderRadius: '10px', 
                                                cursor:'pointer'
                                            }}
                                            onClick={()=>window.open(`https://www.youtube.com/watch?v=${selectedFilm.videoId}`)}>
                                                <IoIosPlay 
                                                    style={{
                                                        height:'2vw', 
                                                        width:'2vw', 
                                                        color:'red', 
                                                        marginRight:'1vw'
                                                    }}
                                                /> Play
                                            </button>
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
    const {crew} = props;
    return(Object.keys(crew).map(key => 
            <div style={{marginLeft:30}}>
                <span style={{fontSize:'1.5vw', fontWeight:'bold'}}>{key}:</span>
                <span style={{fontSize:'1.3vw', marginLeft: 10}}>{typeof(crew[key]) === "object" ? crew[key].join(', '):crew[key]}</span>
            </div>
    ))    
}

export default Description;