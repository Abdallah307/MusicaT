import axios from 'axios';



class SongsService {
    
    retrieveAllSongs() {
        return axios.get("http://localhost:8081/songs")
    }
}

export default new SongsService();