package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LikesResource {

    @Autowired
    private LikesService likesService;

    @GetMapping("/users/{userId}/likes")
    public List<Likes> getUserLikes(@PathVariable int userId) {
        return likesService.getLikes(userId);

    }

    @PutMapping("/users/{userId}/{songId}/likes")
    public void addToLikes(@PathVariable int userId , @PathVariable int songId){
        likesService.addToLikes(userId , songId);
    }

    @DeleteMapping("/users/{userId}/{songId}/likes/delete")
    public void deleteFromLikes(@PathVariable int userId ,@PathVariable int songId) {
        likesService.deleteFromLikes(userId , songId);
    }

    @GetMapping("/songs")
    public List<Likes> getAllSongs() {
       return likesService.getAllSongs();
    }



}
