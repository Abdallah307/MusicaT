import React, { Component } from 'react';
import AuthenticatedService from '../AuthenticationService/AuthenticationService';
import HistoryService from '../../api/HistoryService';
import DataBlock from './DataBlock';

class HistoryBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            History:[]
        }
    }


    componentDidMount() {
        HistoryService.retrieveUserHistory(2) 
        .then((response)=>{
            this.getHistory(response)
        })
    }

    getHistory = (response) => {
        this.setState({
            History:response.data

        })

    }


    render() {
        if(this.state.History.length!=0)
        return(
            <div className="d-flex aaa flex-column">
           <h1 className="mt-4 animate__animated animate__slideInLeft slower" style={{color:'#8122CB'}}>History</h1>
             <DataBlock ty={false} data={this.state.History} />


            </div>
        )
        else{
            return <h1 style={{color:'#8122CB'}}  className="mt-5">The History is Empty</h1>
        }
    }
}

export default HistoryBlock;