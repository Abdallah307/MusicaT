import React, { Component, Fragment } from 'react';
import MainProfileHeader from './MainProfileHeader';
import LikesBlock from '../UserProfile/LikesBlock';
import HistoryBlock from '../UserProfile/HistoryBlock';
import SingerList from '../SingersPage/SingersList';
import SingerProfile from '../SingerProfile/SingerProfile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import Playlist from '../Playlists/Playlist';

export default class MainProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:1
        }
    }


    showData = (event)=>{
        let buttonId = event.target.id
        buttonId ==1 ? this.setState({show:1}):
        buttonId ==2 ? this.setState({show:2}):
        buttonId ==3 ? this.setState({show:3}):
        buttonId ==4 ? this.setState({show:4}):
        this.setState({show:1})
  
      }


    render() {
     

          return(
            
            <>
               <MainProfileHeader clk={this.showData}/>
              <div className="container">
                  {
                      show(this.state.show)
                  }
              </div>
            
              
               
            </>
        )
    }


    
}


function show(id) {
    let urlParams = new URLSearchParams(window.location.search);
   let pa = urlParams.get("singerid")
   if(pa==null){
    if(id==1)
    return <LikesBlock/>
    else if(id==2)
    return <Playlist/>
    else if(id==3)
    return <HistoryBlock/>
    else if(id==4)
    return <SingerList/>
   
   }
else
    return <SingerProfile/>
}






