import React, { Component } from 'react';
import love1 from './love1.png';
import play from './play.png';
import pause from './pause.png';
import love2  from './love2.png';
import close from './close.png'
import HistoryService from '../../api/HistoryService';
import HistoryBlock from './HistoryBlock';
import LikesService from '../../api/LikesService';
class DataBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
             playPause:play
        }
    }

    playPause = (event) => {
        
        let src = event.target.src
         if(src==play){
           event.target.src=pause
           event.target.parentNode.children[4].play();
           let songid = event.target.parentNode.id;
           HistoryService.addToHistory(songid)
           event.target.title="Pause"
           sessionStorage.setItem("songId" , event.target.parentNode.id)

         }
         else{
             event.target.src=play
             event.target.parentNode.children[4].pause();
             event.target.title="Play"
         }
    }

    removeItem = (event) => {
        if(this.props.ty==true){
            LikesService.removeFromLikes(event.target.parentNode.id)
            event.target.parentNode.style.display="none"
        }
        else if(this.props.ty==false) {
            HistoryService.deleteFromHistory(event.target.parentNode.id)
            event.target.parentNode.style.display="none"
        }
       
    }

   
 

   
   
    render() {
       
        return(
            <div className="d-flex flex-column">
                   
                    { this.props.data.map((value) => {
                        let ty = this.props.ty;
                        return(
                            
                        <div id={value.songId} key={value.songId} className="p-3 mt-3 songlike">
                            <img className="mr-3" src={value.songPic} height="50px" width="50px"/>
                            <img style={{cursor:'pointer'}} title="Play" onClick={this.playPause} src={play} height="40px" width="40px"/>
                            <h4 className="ml-3 pt-2 mr-auto">{value.songName}</h4>
                            <img title="Delete" style={{cursor:'pointer'}}  onClick={this.removeItem}  src={close} height="40px" width="40px"/>
                            <audio style={{display:'none'}} controls>
                            <source src={value.songUrl} type="audio/mp3"/>
                            </audio>
                        </div>
                        )
                    })
                    
                     }

                     
    
    
                </div>
        )
    }

    
}




export default DataBlock;