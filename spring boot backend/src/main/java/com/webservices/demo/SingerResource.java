package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class SingerResource {
    @Autowired
    private SingerService singerService;

    @GetMapping("/singers/{id}/songs")
    public List<Likes> getSingerSongs(@PathVariable int id) {
        return singerService.getSingerSongs(id);
    }

    @GetMapping("/singers")
    public List<Singer> add() {
        return singerService.addSigers();
    }


}
