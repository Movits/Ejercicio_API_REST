import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("", async (req,res)=>{
    try {
        const [resultado] = await pool.query("SELECT * FROM USUARIOS")
        console.log(resultado);
        res.json(resultado/* [0][0] */)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"error de servidor"})
    }
});

app.get("/api/:id", async (req,res)=>{
    const [resultado] = await pool.query("SELECT * FROM USUARIOS WHERE dni = ?", req.params.id);
    console.log(resultado);
    res.json(resultado/* [0][0] */)
});

app.get("/api", (req,res)=>{
    console.log(req.query);
    res.send(`<h1> Hola 2! ${req.query.param2} </h1>`)
});

app.get("/api/:id", (req,res)=>{
    console.log(req.params);
    res.send(`<h1> Hola 3! ${req.params.id} </h1>`)
});

app.post("/api", (req,res)=>{
    console.log(req.body);
    res.status(201).send(`<h1> POST! ${req.body["atributo 1"]} </h1>`)
});

app.put("/api", (req,res)=>{
    console.log(req.body);
    res.json({atributo:`<h1> PUT! </h1>`})
});

app.delete("/api", (req,res)=>{
    res.json({atributo:`<h1> DELETE! </h1>`})
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log("servidor activo", process.env.PORT || 3000)
});

app.use((req,res)=>{
    res.send("<h1> ERROR: ruta no encontrada </h1>")
});