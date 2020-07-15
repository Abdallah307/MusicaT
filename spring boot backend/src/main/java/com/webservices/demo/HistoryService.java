package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
@Service
public class HistoryService {
    private static List<Likes> history = new ArrayList<>();
    private DatabaseConnection databaseConnection = new DatabaseConnection();

    public List<Likes> getHistory(int id) {
        history.clear();//to avoid ruplicate request

        try{
            Connection connection = databaseConnection.connection();
            Statement stmt = connection.createStatement();


            String query = " select songId from history where userId="+id;


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
                    history.add(new Likes(singername , songname , songpic , songurl , songId));
                }
            }
            return history;

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

    public void addToHistory(int songId , int userID) {
        boolean equal = false;
        try{
            Connection connection = databaseConnection.connection();
           ResultSet resultSet;

            String query1 = "select * from history";
            PreparedStatement preparedStmt = connection.prepareStatement(query1);
            resultSet = preparedStmt.executeQuery();
            while (resultSet.next()){
                int uid = resultSet.getInt(2);
                int sid = resultSet.getInt(1);
                if(userID==uid && songId==sid)
                 equal = true;

            }

            if(!equal) {
                String query = "insert into history(songID , userId) values (? , ?)";
                preparedStmt = connection.prepareStatement(query);
                preparedStmt.setInt(1 , songId);
                preparedStmt.setInt(2 , userID);
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

    public void deleteFromHistory(int userId , int songId) {
        try{
            Connection connection = databaseConnection.connection();

            String query1 = "delete from history where userId=? and songId=?";
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
}
