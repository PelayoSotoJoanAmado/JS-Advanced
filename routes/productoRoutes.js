import express from "express";
import {
  listarProductos,
  buscarProductoPorId,
  registrarProducto,
  actualizarProducto,
  eliminarProducto,
  listarProductosDisponibles,
  buscarProductosPorNombre,
} from "../controllers/productoController.js";

const router = express.Router();

// Definición de rutas
router.get("/", listarProductos);
router.get("/disponibles", listarProductosDisponibles);
router.get("/buscar", buscarProductosPorNombre);

router.get("/:id", buscarProductoPorId);
router.post("/", registrarProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

export default router;