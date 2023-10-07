import { Pelicula } from "../clases/Pelicula";

export const crearArrayPelicula = (peliculasJson: any): Pelicula[] => {
  const peliculasArray = [];
  peliculasJson.forEach((element: any) => {
    peliculasArray.push(parsearPeliculas(element));
  });
  return peliculasArray;
};

const parsearPeliculas = (peliculaJson: any): Pelicula => {
  return new Pelicula(
    peliculaJson["nombre"],
    peliculaJson["epoca"],
    peliculaJson["duracion"],
    peliculaJson["genero"],
    peliculaJson["precioTicket"]
  );
};
