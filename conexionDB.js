import { createPool } from "mysql2/promise";
import configuracion from "./configuracion.js";

/* console.log(configuracion.PORT);
console.log(configuracion.HOST);
console.log(configuracion.USER);
console.log(configuracion.PASSWORD);
console.log(configuracion.NAME); */

const CREAR_TABLA = `
    CREATE TABLE IF NOT EXISTS usuarios (
        dni INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(45) NOT NULL,
        edad INT NOT NULL,
        email VARCHAR(45) NOT NULL,
        contrasena VARCHAR(45) NOT NULL
    );
`;

const pool = createPool({
    host : configuracion.HOST,
    port : configuracion.PORT,
    user : configuracion.USER,
    password : configuracion.PASSWORD,
    database : configuracion.NAME,
});

await pool.query(CREAR_TABLA);

console.log("conexion exitosa");

export default pool;