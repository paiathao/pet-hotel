-- create database
CREATE DATABASE "pet_hotel";

-- create table
CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "breed" VARCHAR(50) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "owner" VARCHAR(80) NOT NULL,
    "image_path" VARCHAR(120) NOT NULL
);

-- insert data
INSERT INTO "pets" ("name", "breed", "color", "owner", "image_path")
VALUES ('Joy', 'kitten', 'grey', 'Peter', 'kitty.jpg'),
('June', 'lamb', 'white', 'Abigail', 'lamb.jpg'),
('Lucky', 'puppy', 'white', 'Allen', 'puppy.jpg'),
('Beauty', 'rabbit', 'white', 'Cheryl', 'rabbit.jpg');
