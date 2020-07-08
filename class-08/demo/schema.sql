DROP TABLE IF EXISTS person;
CREATE TABLE IF NOT EXISTS person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

INSERT INTO person(first_name,last_name) VALUES ('Ahmad','Swedani');