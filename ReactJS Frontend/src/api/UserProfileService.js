import axios from 'axios';
import AuthenticationService from '../Components/AuthenticationService/AuthenticationService';
import UserProfile from '../Components/UserProfile/UserProfile';

class UserProfileService {
    retrieveUserInfo() {
        let userId = AuthenticationService.getLoggdedInUserId()
        return axios.get(`http://localhost:8081/users/${userId}`)
    }
}

export default new UserProfileService();