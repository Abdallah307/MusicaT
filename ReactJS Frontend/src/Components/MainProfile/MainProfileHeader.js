import React, { Component, Fragment } from 'react';
import './MainProfile.css';
import SideNav from './SideNav';
import { NavLink, BrowserRouter, Switch} from 'react-router-dom';
import {  Link } from 'react-router-relative-link';
import LikesBlock from '../UserProfile/LikesBlock';
import HistoryBlock from '../UserProfile/HistoryBlock';
import SingerList from '../SingersPage/SingersList';
export default class MainProfileHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }




    render() {
        return(
            <Fragment>
                <BrowserRouter>
                <Switch>
            <div id="profHeader" className="container-fluid">
                <SideNav/>
                <h1 style={{cursor:'pointer'}} id="brand">Musica</h1>
                <ul id="mainNav" className="nav pb-2 d-flex justify-content-center flex-column flex-sm-column flex-md-row">
                    <li className="nav-item mr-5">
                    <Link id={1} onClick={this.props.clk}  to="users/Likes">Likes</Link>
                    </li>
                    <li className="nav-item mr-5">
                    <Link id={2} onClick={this.props.clk}   to="users/playlists">Playlists</Link>
                    </li>
                    <li className="nav-item mr-5">
                    <Link id={3} onClick={this.props.clk}   to="users/history">History</Link>
                    </li>
                    <li className="nav-item mr-5">
                    <Link id={4} onClick={this.props.clk}  to="users/artists">Artists</Link>
                    </li>
                    {/* <li className="nav-item mr-5">
                   <Link id={5} onClick={this.props.clk} to="/users/profile">Profile</Link>
                    </li> */}
                </ul>
            </div>
            </Switch>
            </BrowserRouter>
            
       
            
            </Fragment>
        )
    }
}

