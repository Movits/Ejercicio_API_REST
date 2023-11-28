import { createPool } from "mysql2/promise";
import configuracion from "./configuracion.js";

/* console.log(configuracion.PORT);
console.log(configuracion.HOST);
console.log(configuracion.USER);
console.log(configuracion.PASSWORD);
console.log(configuracion.NAME); */

const pool = createPool({
    host : configuracion.HOST,
    port : configuracion.PORT,
    user : configuracion.USER,
    password : configuracion.PASSWORD,
    database : configuracion.NAME,
});

console.log("conexion exitosa");

export default pool;