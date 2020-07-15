package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class LikesService {
    private static List<Likes> likes = new ArrayList<>();
    private static List<Likes> songs = new ArrayList<>();
    DatabaseConnection databaseConnection = new DatabaseConnection();
    public List<Likes> getLikes(int id) {
        likes.clear();//to avoid ruplicate request
        try{
            Connection connection = databaseConnection.connection();
            Statement stmt = connection.createStatement();


            String query = " select songId from userlikes where userId="+id;


            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()){
                int songid = rs.getInt(1);
                Statement stmt1 = connection.createStatement();
                String query2 = "select * from songs where Id="+songid;
                ResultSet resultSet = stmt1.executeQuery(query2);
                while(resultSet.next()) {
                    int songId = resultSet.getInt(1);
                    String singername = resultSet.getString(2);
                    String songname = resultSet.getString(3);
                    String songpic = resultSet.getString(4);
                    String songurl = resultSet.getString(5);
                    likes.add(new Likes(singername , songname , songpic , songurl ,songId ));
                }
            }
            return likes;

        }
        catch (NullPointerException nullPointerException){
            System.err.println(nullPointerException.getMessage());
            return null;
        }
        catch (SQLException sqlException){
            System.err.println(sqlException.getMessage());
            return null;
        }
    }


    public void addToLikes(int userId , int songId) {
        boolean equal = false;
        try{
            Connection connection = databaseConnection.connection();
            ResultSet resultSet;

            String query1 = "select * from userlikes";
            PreparedStatement preparedStmt = connection.prepareStatement(query1);
            resultSet = preparedStmt.executeQuery();
            while (resultSet.next()){
                int uid = resultSet.getInt(2);
                int sid = resultSet.getInt(1);
                if(userId==uid && songId==sid)
                    equal = true;

            }

            if(!equal) {
                String query = "insert into userlikes(songID , userId) values (? , ?)";
                preparedStmt = connection.prepareStatement(query);
                preparedStmt.setInt(1 , songId);
                preparedStmt.setInt(2 , userId);
                preparedStmt.execute();
            }





        }
        catch (NullPointerException nullPointerException){
            System.err.println(nullPointerException.getMessage());

        }
        catch (SQLException sqlException){
            System.err.println(sqlException.getMessage());

        }
    }

    public void deleteFromLikes(int userId , int songId) {
        try{
            Connection connection = databaseConnection.connection();

            String query1 = "delete from userlikes where userId=? and songId=?";
            PreparedStatement preparedStmt = connection.prepareStatement(query1);
            preparedStmt.setInt(1 , userId);
            preparedStmt.setInt(2 , songId);
            preparedStmt.execute();


        }
        catch (NullPointerException nullPointerException){
            System.err.println(nullPointerException.getMessage());

        }
        catch (SQLException sqlException){
            System.err.println(sqlException.getMessage());

        }
    }

    public List<Likes> getAllSongs() {
        songs.clear();//to avoid ruplicate request
        try{
            Connection connection = databaseConnection.connection();
            Statement stmt = connection.createStatement();


            String query = " select * from songs";


            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                int songId = rs.getInt(1);
                String singername = rs.getString(2);
                String songname = rs.getString(3);
                String songpic = rs.getString(4);
                String songurl = rs.getString(5);
                songs.add(new Likes(singername , songname , songpic , songurl ,songId ));

            }
            return songs;

        }
        catch (NullPointerException nullPointerException){
            System.err.println(nullPointerException.getMessage());
            return null;
        }
        catch (SQLException sqlException){
            System.err.println(sqlException.getMessage());
            return null;
        }
    }
}
