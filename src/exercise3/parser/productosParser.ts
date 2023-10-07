import { Producto } from "../clases/Producto";

export const crearMapProducto = (productoJson: any): Map<string, Producto> => {
  const mapProducto = new Map<string, Producto>();

  productoJson.forEach((element: any) => {
    const producto = parsearProducto(element);
    mapProducto.set(producto.nombre, producto);
  });

  return mapProducto;
};

const parsearProducto = (productosJson: any): Producto => {
  return new Producto(
    productosJson["nombre"],
    productosJson["precio"],
    productosJson["stock"],
    productosJson["peso"],
    productosJson["perecible"],
    productosJson["volumen"]
  );
};
