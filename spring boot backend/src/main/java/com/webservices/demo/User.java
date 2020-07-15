package com.webservices.demo;

public class User {
    private int id;
    private String username;
    private String email;
    private String profilePic;
    private String coverPic;

    public User(int id, String username, String profilePic, String coverPic) {
        this.id = id;
        this.username = username;
        this.profilePic = profilePic;
        this.coverPic = coverPic;

    }

    public User(int id, String username, String email, String profilePic, String coverPic) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.profilePic = profilePic;
        this.coverPic = coverPic;
    }

    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public String getCoverPic() {
        return coverPic;
    }

    public void setCoverPic(String coverPic) {
        this.coverPic = coverPic;
    }
}
