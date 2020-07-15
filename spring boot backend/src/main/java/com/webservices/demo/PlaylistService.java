package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlaylistService {

    private static List<String> playlist = new ArrayList<>();
    private static List<Playlist> playlist1 = new ArrayList<>();
    DatabaseConnection databaseConnection = new DatabaseConnection();

    public List<String> getPlayLists(int idd) {
      playlist.clear();
        try {
            Connection connection = databaseConnection.connection();
            ResultSet rs;
            String query = " select distinct list_name from playlists where userId="+idd;
            Statement statement = connection.createStatement();


            rs= statement.executeQuery(query);

            while (rs.next()) {
//                int songId = rs.getInt(1);
//                int userId = rs.getInt(2);
                String listname = rs.getString(1);
                playlist.add(listname);

            }
            return playlist;

        } catch (NullPointerException nullPointerException) {
            System.err.println(nullPointerException.getMessage());
            return null;
        } catch (
                SQLException sqlException) {
            System.err.println(sqlException.getMessage());
            return null;
        }
    }

    public List<Playlist> getPlayListsSongs(int userId , String listname) {
        playlist1.clear();//to avoid ruplicate request

        try {
            Connection connection = databaseConnection.connection();
            ResultSet rs;
            String query = " select * from playlists where userId=? and list_name=?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setInt(1 , userId);
            statement.setString(2 , listname);

            rs= statement.executeQuery();

            while (rs.next()) {
                int songId = rs.getInt(1);
                int userIdd = rs.getInt(2);
                String listname1 = rs.getString(3);
                playlist1.add(new Playlist(songId , userIdd , listname1) );

            }
            return playlist1;

        } catch (NullPointerException nullPointerException) {
            System.err.println(nullPointerException.getMessage());
            return null;
        } catch (
                SQLException sqlException) {
            System.err.println(sqlException.getMessage());
            return null;
        }
    }
}
