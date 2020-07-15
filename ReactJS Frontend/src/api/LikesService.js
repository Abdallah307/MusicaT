import axios from 'axios';
import AuthenticationService from '../Components/AuthenticationService/AuthenticationService';

class LikesService {
    retrieveUserLikes() {
        let userId = AuthenticationService.getLoggdedInUserId()
       return axios.get(`http://localhost:8081/users/${userId}/likes`)
    
    }

    addToLikes(songId) {
        let userId = AuthenticationService.getLoggdedInUserId()
        return axios.put(`http://localhost:8081/users/${userId}/${songId}/likes`)
    }

    removeFromLikes(songId) {
        let userId = AuthenticationService.getLoggdedInUserId()
         axios.delete(`http://localhost:8081/users/${userId}/${songId}/likes/delete`)
    }
}

export default new LikesService();