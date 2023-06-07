DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id        INT          NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50)  NOT NULL,
    last_name  VARCHAR(50),
    email     VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name, email)
VALUES ('Sam', 'Kirby', 'sam@yahoo.com'),
    ('Anna', 'Mendoza', 'anna@gmail.com'),
    ('Jenny', 'Green', 'jgreen27@proton,com');