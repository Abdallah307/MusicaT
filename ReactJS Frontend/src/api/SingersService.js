import axios from 'axios';

class SingersService {

    retrieveAllSingers(){
        
        return axios.get("http://localhost:8081/singers" );

    }
}

export default new SingersService();