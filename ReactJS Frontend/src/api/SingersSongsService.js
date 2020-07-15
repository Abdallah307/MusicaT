import axios from "axios";

class SingerSongsService {

    retrieveSingersSongs(singerId) {
       return axios.get(`http://localhost:8081/singers/${singerId}/songs`);
    }
}


export default new SingerSongsService();