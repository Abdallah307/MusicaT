package com.webservices.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin
public class HistoryResource {

    @Autowired
    private HistoryService historyService;

    @GetMapping("/users/{userId}/history")
    public List<Likes> getUserHistory(@PathVariable int userId) {
        return historyService.getHistory(userId);

    }

    @PutMapping("/users/{userId}/{songId}/history")
    public void addToHistory(@PathVariable int userId , @PathVariable int songId) {
        historyService.addToHistory(songId , userId);
    }

    @DeleteMapping("/users/{userId}/{songId}/history/delete")
    public void deleteFromLikes(@PathVariable int userId ,@PathVariable int songId) {
        historyService.deleteFromHistory(userId , songId);
    }
}
