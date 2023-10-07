import peliculasJson from "./jsons/peliculas.json";
import { crearArrayPelicula } from "./parser/peliculasParser";
import { ordenarDuracionArray, ordenarGeneroArray } from "./functions";
import { Pelicula } from "./clases/Pelicula";

const peliculaArray = crearArrayPelicula(peliculasJson);
const peliculaTerror: Pelicula[] = [];
const peliculaAccion: Pelicula[] = [];
const peliculaComedia: Pelicula[] = [];

ordenarGeneroArray(
  peliculaArray,
  peliculaTerror,
  peliculaComedia,
  peliculaAccion
);

ordenarDuracionArray(peliculaTerror);
ordenarDuracionArray(peliculaComedia);
ordenarDuracionArray(peliculaAccion);

peliculaTerror.forEach((element) => {
  element.mostrarInformacion();
});

peliculaComedia.forEach((element) => {
  element.mostrarInformacion();
});

peliculaAccion.forEach((element) => {
  element.mostrarInformacion();
});
