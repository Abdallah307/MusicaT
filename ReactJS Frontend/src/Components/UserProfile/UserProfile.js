import React, { Component, Fragment } from 'react';
import './UserProfile.css';
import x from '../HomePage/abdallah.jpg';
import LikesBlock from './LikesBlock';
import HistoryBlock from './HistoryBlock';
import Profile from '../Profile/Profile';
import AuthenticationService from '../AuthenticationService/AuthenticationService';
import axios from 'axios';
import UserProfileService from '../../api/UserProfileService';
import SingerList from '../SingersPage/SingersList';
import SingerProfile from '../SingerProfile/SingerProfile';
import NavBar from '../NavBar/NavBar';
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
              show:1, 
              userInfo:[]
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
    


    componentDidMount() {
         UserProfileService.retrieveUserInfo()
         .then((response)=>{
            this.handleUserProfileInfo(response)
         })
    }

    handleUserProfileInfo = (response) => {
        this.setState({
            userInfo:response.data
        })

    }





    render() {

        
        return(
            
         <Fragment>
             {/* <NavBar bg="#8122CB" position="fixed-top"/> */}
             {
                 this.state.userInfo.map((value) => {
                     return(
                     <div key={value.id} id="mainContainer" className="container-fluid">
               
                        <Profile name={value.username} profileImage={x}/>
                        <div className="container">
                            <ul className="d-flex mt-3 justify-content-around">
                                <li className="mr-3"><button id={1}   onClick={this.showData} className="btn btn-lg">Likes</button></li>
                                <li className="mr-3"><button id={2}  onClick={this.showData} className="btn btn-lg">Playlists</button></li>
                                <li className="mr-3"><button id={3}   onClick={this.showData} className="btn btn-lg">History</button></li>
                                <li className="mr-3"><button id={4}   onClick={this.showData} className="btn btn-lg">Artists</button></li>
                            </ul>
        
                        </div>
                     {/* {this.state.showL && <LikesBlock/> }  */ <div className="d-flex justify-content-center">{show(this.state.show)}</div>}
                       
                    </div>
                     )
                 })
             }
         </Fragment>
            
        )
    }
}

function show(id) {
    if(id==1)
    return <LikesBlock/>
    else if(id==2)
    return "shit man no playlists"
    else if(id==3)
    return <HistoryBlock/>
    else if(id==4)
    return <SingerList/>
}

export default UserProfile;