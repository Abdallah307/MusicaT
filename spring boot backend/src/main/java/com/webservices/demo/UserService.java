package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private List<User> users = new ArrayList<>();
    public List<User> getUser(int id) {
        users.clear();
        DatabaseConnection databaseConnection = new DatabaseConnection();
        try{
            Connection connection = databaseConnection.connection();
            ResultSet rs;
            String query =" select * from users where Id=?";

            PreparedStatement preparedStmt = connection.prepareStatement(query);
            preparedStmt.setInt(1 , id);

            rs = preparedStmt.executeQuery();

            //checking if result set is empty
            if(!rs.isBeforeFirst()) {
                System.out.println("Wrong man");
            }

            while (rs.next()){
                int Id = rs.getInt(1);
                String username = rs.getString(2);
                String profilePic = rs.getString(5);
                String coverPic = rs.getString(6);
                users.add(new User(id , username , profilePic , coverPic));
            }
            return users;

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
