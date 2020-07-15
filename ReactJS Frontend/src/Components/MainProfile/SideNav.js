import React, { Fragment, Component } from 'react';
import './SideNav.css';
import AuthenticationService from '../AuthenticationService/AuthenticationService';
import {Link} from 'react-router-relative-link';
export default class SideNav extends Component {

     openNav=()=> {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
       closeNav=()=> {
        document.getElementById("mySidenav").style.width = "0px";
      }
    render() {
    return(
       <div className="d-flex justify-content-end">
            <span style={{fontSize:'30px',cursor:"pointer"}} onClick={this.openNav}>&#9776;</span>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)"  class="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">Edit my profile</a>
                <a href="/" onClick={AuthenticationService.logOut}>Logout</a>
            </div>
      </div>
        
    )
    }
}

