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
                                        <div style={{ fontSize: 30, marginRight: 50, fontWeight: 'bold' }}>
                                            {selectedFilm.name}
                                        </div>
                                        <div style={{fontSize: 20, marginRight: 50}}>{selectedFilm.type}</div>
                                        <div style={{ marginRight: 50}}>
                                            Duration: {selectedFilm.duration}
                                        </div>    
                                        <button style={{
                                            border:'0px', 
                                            borderRadius:'10px', 
                                            backgroundColor:'black', 
                                            color:'white', 
                                            height:'5vh', 
                                            width: '8vw', 
                                            display:'flex', 
                                            flexDirection:'row', 
                                            justifyContent:'center', 
                                            alignItems:'center', cursor:'pointer'}}
                                            onClick={()=>window.open('https://www.google.com')}><IoIosFilm style={{height:20, width:20, color:'red', marginRight:'1vw'}} />Trailer</button>                          
                                        
                                    </div>
                                    <div style={{ fontSize: 20,margin:'20px 0 20px 0' }}>
                                        Crew: <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                        <CrewDetails crew={selectedFilm.crew} />
                                        </div>
                                    </div>
                                    <div style={{ fontSize: 20,margin:'20px 0 20px 0' }}>
                                        Synopsis:
                                        <div style={{ fontSize: 15, marginLeft: 25 }}>{selectedFilm.summary}</div>
                                    </div>
                                    <div style={{ fontSize: 20,margin:'20px 0 20px 0' }}>
                                        Personal Notes:
                    <div style={{ fontSize: 15, marginLeft: 25 }}>{selectedFilm.personalNote}</div>
                                    </div>
                                    <div style={{ fontSize: 20, margin:'20px 0 20px 0' }}>
                                        Trivia:
                    <div style={{ fontSize: 15, marginLeft: 25 }}>{selectedFilm.trivia}</div>
                                    </div>
                                </div>                            
                                <div style={{width:'20%', height:'80vh',display:'flex', flexDirection:'column'}}>
                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'80%', marginRight:'10vw', marginTop:'5%'}} >
                                        <IoIosCloseCircle style={{height:30, width:30, color:'red'}} onClick={() => close()}/>
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
                                                fontSize: 20, 
                                                color:'white', 
                                                backgroundColor:'black', 
                                                border:'0px', 
                                                borderRadius: '10px', 
                                                cursor:'pointer'
                                            }}
                                            onClick={()=>window.open(`https://www.youtube.com/watch?v=${selectedFilm.videoId}`)}>
                                                <IoIosPlay 
                                                    style={{
                                                        height:30, 
                                                        width:30, 
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
                <span style={{fontSize:18, fontWeight:'bold'}}>{key}:</span>
                <span style={{fontSize:15, marginLeft: 10}}>{typeof(crew[key]) === "object" ? crew[key].join(', '):crew[key]}</span>
            </div>
    ))    
}

export default Description;