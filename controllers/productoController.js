import productos from "../data/productos.js";

const listarProductos = (req, res) => {
  res.json(productos);
};

const buscarProductoPorId = (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }
  res.json(producto);
};

const registrarProducto = (req, res) => {
  const { nombre, precio, stock } = req.body;

  if (!nombre || precio === undefined || stock === undefined) {
    return res.status(400).json({ mensaje: "Debe enviar nombre, precio y stock" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    stock
  };

  productos.push(nuevoProducto);
  res.status(201).json({
    mensaje: "Producto registrado correctamente",
    producto: nuevoProducto
  });
};

const actualizarProducto = (req, res) => {
  const id = Number(req.params.id);
  const { nombre, precio, stock } = req.body;
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  producto.nombre = nombre ?? producto.nombre;
  producto.precio = precio ?? producto.precio;
  producto.stock = stock ?? producto.stock;

  res.json({
    mensaje: "Producto actualizado correctamente",
    producto
  });
};

const eliminarProducto = (req, res) => {
  const id = Number(req.params.id);
  const indice = productos.findIndex((item) => item.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  const productoEliminado = productos.splice(indice, 1);
  res.json({
    mensaje: "Producto eliminado correctamente",
    producto: productoEliminado[0]
  });
};

const listarProductosDisponibles = (req, res) => {
  const disponibles = productos.filter((item) => item.stock > 0);
  res.json(disponibles);
};

const buscarProductosPorNombre = (req, res) => {
  const nombre = req.query.nombre;

  if (!nombre) {
    return res.status(400).json({ 
      mensaje: "Debe enviar un nombre para buscar" 
    });
  }

  const resultados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  res.json(resultados);
};


export {
  listarProductos,
  buscarProductoPorId,
  registrarProducto,
  actualizarProducto,
  eliminarProducto,
  listarProductosDisponibles,
  buscarProductosPorNombre
};
