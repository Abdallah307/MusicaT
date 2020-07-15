import React, { Component, Fragment } from 'react';
import AuthenticatedService from '../AuthenticationService/AuthenticationService';
import PlaylistsService from '../../api/PlaylistsService';
class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Playlists:[] , 
            PlaylistSongs:[]
        }
    }


    componentDidMount() {
        PlaylistsService.retrievePlayLists()
        .then((response)=> {
            this.handlePlaylists(response)
        })
        
       
    }

    handlePlaylists = (response) => {
        this.setState({
            Playlists:response.data
        })

        this.state.Playlists.map((value)=> {
            PlaylistsService.retrievePlayListsSongs(value.listName)
            .then((response)=> {
                this.setState({
                    PlaylistSongs:response.data
                })
            })
        })


    }

   


    render() {
        return(
            <Fragment>
            <h1 className="mt-4 animate__animated animate__slideInLeft slower" style={{color:'#8122CB'}}>Playlists</h1>
            {
                     this.state.Playlists.map((value) => {
                        return(
                            <div className="d-flex aaa flex-column">
                            
                             
                           <div>
                            
                            <h1 style={{color:'#8122CB'}}>{value}</h1>
                            
                            </div>
                           
                           </div>
                        )
            
                    })
            }
            </Fragment>
        )

   
        
        
        
}
}

export default Playlist;