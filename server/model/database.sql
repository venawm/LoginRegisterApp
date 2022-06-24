CREATE DATABASE JWT;

CREATE TABLE users{
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(300) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR (256) NOT NULL

}