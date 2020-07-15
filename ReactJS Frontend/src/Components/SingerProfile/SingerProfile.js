import React, { Component, Fragment } from 'react';
import Profile from '../Profile/Profile';
import x from '../HomePage/abdallah.jpg';
import play from '../UserProfile/play.png';
import love1 from '../UserProfile/love11.png';
import love2 from '../UserProfile/love2.png';
import pause from '../UserProfile/pause.png';
import './SingerProfile.css';
import '../SingersPage/SingerPage.css';
import SingersSongsService from '../../api/SingersSongsService';
import AuthenticationService from '../AuthenticationService/AuthenticationService';
import LikesService from '../../api/LikesService';
import HistoryService from '../../api/HistoryService';
class SingerProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
           SingerSongs:[]
        }
    }


    componentDidMount() {
       
        SingersSongsService.retrieveSingersSongs(sessionStorage.getItem("singerId"))
       .then((response)=>{
           this.setState({
               SingerSongs:response.data
           })
       })
    }

    getSongId = (event) => {
       sessionStorage.setItem("songId" , event.target.id)
       if(event.target.src==play){
           event.target.src=pause
           event.target.parentNode.parentNode.children[3].play()
           HistoryService.addToHistory(event.target.id)
       }
       else{
           event.target.src=play
           event.target.parentNode.parentNode.children[3].pause()
       }
       

    }

    switchLike = (event) => {
       LikesService.addToLikes(event.target.id)
       event.target.className="animate__animated animate__pulse slow"
          if(event.target.src==love2) {
              event.target.src=love1
          }
          else{
              event.target.src=love2
          }

    }


    render() {
        return(
            <section className="container-fluid">
                 <h1 className="mt-4 animate__animated animate__slideInLeft slower" style={{color:'#8122CB'}}>Songs</h1>
            <div className="row d-flex justify-content-center">
           
           {
               this.state.SingerSongs.map((value) => {
                   return(
                      
                        <SingerSongsBlock onClick2={this.switchLike} songUrl={value.songUrl} idd={value.songId} onClick={this.getSongId} key={value.songId} name={value.songName} image={value.songPic} size="col-12 col-sm-12 col-md-6 col-lg-3" />
                       
                   )
               })
           }
          
          </div>
       </section>
        )
    }
}


function SingerSongsBlock(props) {
    return(
        <div   key={props.idd} id={props.idd} className={props.size} className=" singerBlockDiv d-flex flex-column justify-content-center align-items-center">
        <img id={props.idd} src={props.image} className="profileImage"  alt="profile image" />
        <br/>
        <h6 id={props.idd} className="mb-4 text-break text-wrap">{props.name}</h6>
       
       <audio style={{display:'none'}} controls>
            <source src={props.songUrl} />
       </audio>
       
       <div className="d-flex justify-content-start" id={props.idd} >
           
           <img onClick={props.onClick} className="mb-3 mr-5" id={props.idd} src={play} height="40px" width="40px" />
           <img id={props.idd} onClick={props.onClick2} className="mb-3"  src={love1} height="40px" width="40px" />
       </div>
       
        </div>
    )
}

export default SingerProfile;