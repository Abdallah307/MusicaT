import axios from 'axios';
import { Redirect } from 'react-router-dom';


class AuthenticationService {
    
  

    //store the session
    registerSuccessfulLogin(userId) {
        sessionStorage.setItem("userId" , userId);
   
    }

    //remove the session
    logOut() {
        sessionStorage.removeItem("userId");
        
    }

    logIN(email , password) {
       
      return axios.post(`http://localhost:8081/login/${email}/${password}`)
        
    }

    

   

    //maybe some time i want to show somthing based if that user logged in or not
    isUserLoggdedIn () {
        let user = sessionStorage.getItem("userId");
        if(user===null) return false;
        return true;
    }

    getLoggdedInUserId () {
        let user = sessionStorage.getItem("userId");
        if(user===null) return '';
        return user;
    }

    
}

export default new  AuthenticationService();