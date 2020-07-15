package com.webservices.demo;

public class Likes {
    private int songId;
    private String singerName;
    private String songName;
    private String songPic;
    private String songUrl;

    public int getSongId() {
        return songId;
    }

    public void setSongId(int songId) {
        this.songId = songId;
    }

    public Likes(String singerName, String songName, String songPic, String songUrl , int songId) {
        this.singerName = singerName;
        this.songName = songName;
        this.songPic = songPic;
        this.songUrl = songUrl;
        this.songId = songId;
    }

    public String getSingerName() {
        return singerName;
    }

    public void setSingerName(String singerName) {
        this.singerName = singerName;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getSongPic() {
        return songPic;
    }

    public void setSongPic(String songPic) {
        this.songPic = songPic;
    }

    public String getSongUrl() {
        return songUrl;
    }

    public void setSongUrl(String songUrl) {
        this.songUrl = songUrl;
    }


}
