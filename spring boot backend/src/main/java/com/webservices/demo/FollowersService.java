package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class FollowersService {
    private List<User> followers = new ArrayList<>();

    public Connection getDatabaseConnection() {
        DatabaseConnection databaseConnection = new DatabaseConnection();
        return databaseConnection.connection();
    }
    public List<User> getFollowers(int id) {
        followers.clear();
        try{

            Connection connection = getDatabaseConnection();
            ResultSet rs;

            String query = "select * from users where Id in (select followerId from Followers where singerId=?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1,id);
            rs = preparedStatement.executeQuery();



            while (rs.next()){
                int identity = rs.getInt(1);
                String username = rs.getString(2);
                String email = rs.getString(3);
                String profilePic = rs.getString(5);
                String coverPic = rs.getString(6);
                followers.add(new User(identity , username , email , profilePic , coverPic));
            }
            return followers;

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
