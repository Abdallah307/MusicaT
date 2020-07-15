import axios from 'axios';
import AuthenticationService from '../Components/AuthenticationService/AuthenticationService';

class HistoryService {
    retrieveUserHistory() {
        let userId = AuthenticationService.getLoggdedInUserId()
       return axios.get(`http://localhost:8081/users/${userId}/history`)
    
    }

    addToHistory(songId) {
        let userId = AuthenticationService.getLoggdedInUserId()
        axios.put(`http://localhost:8081/users/${userId}/${songId}/history`)
    }

    deleteFromHistory(songId) {
        let userId = AuthenticationService.getLoggdedInUserId()
        axios.delete(`http://localhost:8081/users/${userId}/${songId}/history/delete`)
    }
}

export default new HistoryService();