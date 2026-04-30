import express from "express";
import cors from "cors"; 
import productoRoutes from "./routes/productoRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API REST de productos funcionando correctamente");
});

app.get('/hola', (req, res) =>{
    res.send('Hello world')
})

app.use("/api/productos", productoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
