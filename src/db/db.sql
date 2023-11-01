CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employees (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 500),
(4, 'Max', 4150);
