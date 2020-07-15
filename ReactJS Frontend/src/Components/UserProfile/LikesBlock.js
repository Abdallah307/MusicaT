import React, { Component } from 'react';
import AuthenticatedService from '../AuthenticationService/AuthenticationService';
import LikesService from '../../api/LikesService';
import DataBlock from './DataBlock';

class LikesBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Likes:[]
        }
    }


    componentDidMount() {
        LikesService.retrieveUserLikes(2) 
        .then((response)=>{
            this.getLikes(response)
        })
    }

    getLikes = (response) => {
        this.setState({
            Likes:response.data

        })
       

    }


    render() {
        if(this.state.Likes.length!=0)
        return(
            <div className="d-flex aaa flex-column">
             <h1 className="mt-4 animate__animated animate__slideInLeft slower" style={{color:'#8122CB'}}>Likes</h1>
             <DataBlock ty={true} data={this.state.Likes} />
           
           </div>
        )
        else{
            return <h1 style={{color:'#8122CB'}}  className="mt-5">The Likes List is Empty</h1>
        }
        
    }
}

export default LikesBlock;