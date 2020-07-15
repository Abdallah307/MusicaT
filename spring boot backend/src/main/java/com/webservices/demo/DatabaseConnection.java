package com.webservices.demo;
import java.sql.*;
import java.util.List;

public class DatabaseConnection {
    public  Connection connection(){
        try{
            String driver = "com.mysql.jdbc.Driver";
            String url = "jdbc:mysql://localhost:3306/Musica";
            String username = "root";
            String password = "MlIwaKHdY2vZV5am";
            Class.forName(driver);
            Connection conn=DriverManager.getConnection(url ,username , password);
            return conn;


        }

        catch(Exception e){
            return null;
        }
    }


}
