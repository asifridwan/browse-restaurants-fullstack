CREATE DATABASE restaurants;

CREATE TABLE restaurants(id integer NOT NULL PRIMARY KEY, name VARCHAR(255), timetable VARCHAR(255));

CREATE TABLE users(id uuid NOT NULL PRIMARY KEY, username VARCHAR(50), email VARCHAR(100), password VARCHAR(255));

CREATE TABLE collections(id uuid NOT NULL PRIMARY KEY, name VARCHAR(255), user_id uuid NOT NULL REFERENCES users(id));

CREATE TABLE cr_map(c_id REFERENCES collections(id), r_id REFERENCES restaurants(id));