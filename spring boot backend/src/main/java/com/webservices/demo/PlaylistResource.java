package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PlaylistResource {

    @Autowired
    private PlaylistService playlistService;

    @GetMapping("/users/{userId}/playlists")
    public List<String> getPlayLists(@PathVariable int userId) {
        return playlistService.getPlayLists(userId);
    }

    @GetMapping("/users/{userId}/playlists/{name}")
    public List<Playlist> getPlayLists(@PathVariable int userId  , @PathVariable String name) {
        return playlistService.getPlayListsSongs(userId , name);
    }
}
