package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@CrossOrigin
public class LoginResource {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login/{email}/{password}")
    public List<User> loggingIn(@PathVariable String email , @PathVariable String password) {

        return loginService.logIn(email , password);
    }


}
