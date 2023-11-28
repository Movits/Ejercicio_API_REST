SHOW DATABASES;
CREATE DATABASE `ejercicioapirest`;
USE `ejercicioapirest`;

SHOW TABLES;
CREATE TABLE usuarios (
  `dni` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL
);

DESCRIBE usuarios;
SELECT * FROM usuarios;

INSERT INTO usuarios (nombre, edad, email, contrasena) VALUES ('qwerty', 123, 'qwerty@123.com', 'qwerty123');
INSERT INTO usuarios (nombre, edad, email, contrasena) VALUES ('asdfg', 456, 'asdfg@456.com', 'asdfg456');

SELECT * FROM usuarios;