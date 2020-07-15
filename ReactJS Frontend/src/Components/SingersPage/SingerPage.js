import React, { Component, Fragment } from 'react';
import "./SingerPage.css";
import SingerHeader from './SingerHeader';
import SingersList from './SingersList';
class SingerPage extends Component {
    constructor(props) {
        super(props)
        this.state =  {

        }
    }

    render() {
        return(
          <div id="singerContainer">
            <SingerHeader/>
            <SingersList/>
            </div>
        )

    }
}

export default SingerPage;