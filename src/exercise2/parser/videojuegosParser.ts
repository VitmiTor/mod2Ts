import { Videojuego } from "../clases/Videojuego";

export const crearArrayVideojuego = (videojuegosJson: any): Videojuego[] => {
  const videojuegosArray = [];
  videojuegosJson.forEach((element: any) => {
    videojuegosArray.push(parsearVideojuegos(element));
  });
  return videojuegosArray;
};

const parsearVideojuegos = (videojuegosJson: any): Videojuego => {
  return new Videojuego(
    videojuegosJson["nombre"],
    videojuegosJson["epoca"],
    videojuegosJson["precio"],
    videojuegosJson["duracion"],
    videojuegosJson["genero"],
    videojuegosJson["empresa"]
  );
};
