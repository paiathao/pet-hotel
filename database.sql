-- create database
CREATE DATABASE "pet_hotel";

-- create pets table
CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "breed" VARCHAR(50) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "owner_id" INTEGER REFERENCES owners,
    "check_in" boolean DEFAULT TRUE
);

-- create owners table
CREATE TABLE "owners" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL
);


-- insert data
INSERT INTO "owners" ("name")
VALUES ('Peter'),('Abigail'),('Allen'),('Cheryl');

INSERT INTO "pets" ("name", "breed", "color", "owner_id")
VALUES ('Joy', 'kitten', 'grey', 1),
('June', 'lamb', 'white', 2),
('Lucky', 'puppy', 'white', 3),
('Beauty', 'rabbit', 'white', 4);


