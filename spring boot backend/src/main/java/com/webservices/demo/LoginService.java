package com.webservices.demo;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class LoginService {
    private List<User> users = new ArrayList<>();
    private boolean logInFlag = false;


    public List<User> logIn(String email , String password) {
        users.clear();
        DatabaseConnection databaseConnection = new DatabaseConnection();
        try{
            Connection connection = databaseConnection.connection();
            ResultSet rs;
            String query =" select * from users where email=?"+"and password=?";

            PreparedStatement preparedStmt = connection.prepareStatement(query);
            preparedStmt.setString(1 , email);
            preparedStmt.setString(2 , password);
            rs = preparedStmt.executeQuery();

            //checking if result set is empty
            if(!rs.isBeforeFirst()) {
                System.out.println("Wrong man");

            }



            while (rs.next()){
                int id = rs.getInt(1);
                String username = rs.getString(2);
                String profilePic = rs.getString(5);
                String coverPic = rs.getString(6);
                users.add(new User(id , username , profilePic , coverPic ));
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
