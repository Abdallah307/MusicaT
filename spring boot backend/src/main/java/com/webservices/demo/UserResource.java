package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class UserResource {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{id}")
    public List<User> getUser(@PathVariable int id) {
        return userService.getUser(id);
    }
}
