package com.webservices.demo;

public class Playlist {
    private int songId;

    public Playlist(int songId, int userId, String listName) {
        this.songId = songId;
        this.userId = userId;
        this.listName = listName;
    }

    public int getSongId() {
        return songId;
    }

    public void setSongId(int songId) {
        this.songId = songId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName;
    }

    private int userId;
    private String listName;
}
