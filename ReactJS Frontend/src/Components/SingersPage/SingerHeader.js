import React, { Component } from 'react';
import "./SingerPage.css";

class SingerHeader extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return(
        <header id="SingerPageHeader" className=" d-flex justify-content-center align-items-end">
           <form>
               <div id="searchDiv" className="d-flex flex-column input-group justify-content-center align-items-center"> 
                 <input id="searchInput" type="text" placeholder="Search a singer"/>
                 <input className="btn" id="searchButton" type="submit" value="Search" />
               </div>
               

           </form>
        </header>
    
        )
    }
}

export default SingerHeader;