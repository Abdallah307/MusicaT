import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from './mustafaceceli.jpg';
import SingersService from '../../api/SingersService';

class SingersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Singers:[]

        }
    }

    componentDidMount() {
        SingersService.retrieveAllSingers()
        .then((response)=>{
            this.addSingers(response);
        })

    }

    addSingers = (response) => {
        this.setState({
            Singers:response.data
        })
        

        

    }

    logger = (event) => {
       sessionStorage.setItem("singerId" , event.target.id)
       window.location.href = `/users/artists?singerid=${event.target.id}`;
       
    }

   

    

    render() {
       
        return(
            <section className="container-fluid singersList">
                <h1 className="mt-4 animate__animated animate__slideInLeft slower" style={{color:'#8122CB'}}>Artists</h1>
                 <div className="row d-flex justify-content-around">
                {
                    this.state.Singers.map((value) => {
                        return(
                           
                             <SingerBlock onClick={this.logger}  idd={value.id} key={value.id} name={value.singerName} image={value.profilePicture} size="col-12 col-sm-12 col-md-6 col-lg-3" />
                            
                        )
                    })
                    
                }
               
               </div>
            </section>
        )
    }
}

function SingerBlock(props) {
    return(
        <div onClick={props.onClick}  key={props.idd} id={props.idd} className={props.size} className=" singerBlockDiv d-flex flex-column justify-content-center align-items-center">
            <img id={props.idd} src={props.image} className="profileImage"  alt="profile image" />
            <br/>
        <h4 id={props.idd} className="mb-4">{props.name}</h4>
        </div>
    )
}





export default SingersList;