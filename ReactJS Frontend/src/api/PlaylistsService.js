import axios from 'axios';
import AuthenticationService from '../Components/AuthenticationService/AuthenticationService';
class PlaylistsService {

    retrievePlayLists() {
        let userId = AuthenticationService.getLoggdedInUserId()
        return axios.get(`http://localhost:8081/users/${userId}/playlists`)
    }

    retrievePlayListsSongs(name) {
        let userId = AuthenticationService.getLoggdedInUserId()
        return axios.get(`http://localhost:8081/users/${userId}/playlists/${name}`)
    }
}


export default new PlaylistsService();