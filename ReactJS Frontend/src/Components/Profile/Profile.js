import React, { Component } from 'react';
import './Profile.css';
import x from '../HomePage/abdallah.jpg';

function Profile(props){
          
        return(
            <div id="profileHeader" className="container d-flex align-items-center align-content-center">

                    <div className="mr-3">
                    <img src={props.profileImage} className="img-fluid rounded-circle" height="200px" width="200px" />
                    </div>

                    <div className="ml-1" style={{textAlign:'start'}}>
                        <h2>{props.name}</h2>
                        <button className="btn btn-danger">+Follow</button>
                    </div>
                    
                
            </div>
                
     )
    
}

export default Profile;