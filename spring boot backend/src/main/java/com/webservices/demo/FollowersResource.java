package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class FollowersResource {
    @Autowired
    private FollowersService followersService;

    @GetMapping("/singers/{id}/followers")
    public List<User> getFollowers(@PathVariable int id) {
        return followersService.getFollowers(id);
    }
}
