package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
@Service//buisness service
public class SingerService {
    private static List<Singer> singers = new ArrayList<Singer>();
    private static List<Likes> songs = new ArrayList<>();

    public Connection getDatabaseConnection() {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        return databaseConnection.connection();
    }

    public List<Singer> addSigers() {
        singers.clear();
        //  DatabaseConnection databaseConnection = new DatabaseConnection();
        try{
            Connection connection = getDatabaseConnection();
            Statement stmt = connection.createStatement();

            String query = "select * from singers";


            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()){
                int idd = rs.getInt(1);
                String singername = rs.getString(2);
                String singerCoverImage = rs.getString(3);
                String singerProfileImage = rs.getString(4);
                singers.add(new Singer(singername , singerCoverImage , singerProfileImage , idd));
                // System.out.println("username : " +singername + "userEmail : "+singerCoverImage + "songname: " +singerProfileImage );
            }
            return singers;

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

    public List<Likes> getSingerSongs(int id) {
        songs.clear();
        try{
            Connection connection = getDatabaseConnection();
            Statement stmt = connection.createStatement();
            ResultSet rs;
            String query = "select * from songs where singername in (select singername from singers where id=?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1 , id);

            rs = preparedStatement.executeQuery();

            while (rs.next()){
                songs.add(new Likes(rs.getString(2) ,rs.getString(3) , rs.getString(4) , rs.getString(5) , rs.getInt(1)));

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
