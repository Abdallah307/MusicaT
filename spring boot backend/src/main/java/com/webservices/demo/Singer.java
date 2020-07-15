package com.webservices.demo;

public class Singer {
    private int id;
    private String singerName;
    private String coverPicture;
    private String profilePicture;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Singer(String singerName, String coverPicture, String profilePicture , int id) {
        this.singerName = singerName;
        this.coverPicture = coverPicture;
        this.profilePicture = profilePicture;
        this.id = id;
    }

    public String getSingerName() {
        return singerName;
    }

    public void setSingerName(String singerName) {
        this.singerName = singerName;
    }

    public String getCoverPicture() {
        return coverPicture;
    }

    public void setCoverPicture(String coverPicture) {
        this.coverPicture = coverPicture;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }




}
