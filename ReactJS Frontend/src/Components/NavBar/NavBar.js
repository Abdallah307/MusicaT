import React from 'react'
import {NavLink} from 'react-router-dom';
import "./NavBar.css";

function NavBar(props) {
    return(
      <nav style={{backgroundColor:`${props.bg}`}} className="wrapingNav" className={props.position}>
        
        <ul className="NavBar">
          <li id="brand"><NavLink exact to="/">Musica</NavLink></li>
          <div className="d-flex">
          <li><NavLink to="/Register">Register</NavLink></li>
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/About">About us</NavLink></li>
          </div>
          <div></div>
         
        </ul>
      </nav>
    )
}


export default NavBar;