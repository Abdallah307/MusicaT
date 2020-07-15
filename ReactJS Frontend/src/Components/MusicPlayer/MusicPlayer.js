import React, { Component } from 'react';
import x from '../HomePage/abdallah.jpg';
import play from '../UserProfile/play.png';
import './MusicPlayer.css';
import SongsService from '../../api/SongsService';
class MusicPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Songs:[] ,
            pic:'' ,
            sname:''
        }
    }

    componentDidMount() {
       SongsService.retrieveAllSongs()
       .then((response)=> {
           this.setState({
               Songs:response.data 
              
           })
       })
    }


  

    render() {
        let sid = sessionStorage.getItem("songId")
        return(
            <div className="container-fluid bg-warning fixed-bottom p-3">
                <div className="d-flex justify-content-between">
                    
                    <div className="d-flex">
                       <img src={x} width="50px" height="50px"/>
                       <h2>name</h2>
                    </div>

                  
                 <img className="mr-5" src={play} width="40px" height="40px"/>
                  
                  

                    <div>
                        sadasd
                    </div>
                    
                </div>

                <div class="slidecontainer">
                    <input type="range" min="1" max="100"  className="slider" id="myRange"/>
                </div>

                <audio style={{display:'none'}} controls>
                    
                </audio>

            </div>
        )
    }
}


export default MusicPlayer;