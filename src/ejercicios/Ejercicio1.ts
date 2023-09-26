import { Peliculas } from "../clases/Peliculas";
import peliculasJson from "../jsons/ex1/peliculas.json";
import { ordenarDuracionArray, ordenarGeneroArray } from "../utilities/Parsear";

const peliculaArray = Peliculas.crearArray(peliculasJson);
const peliculaTerror = [];
const peliculaAccion = [];
const peliculaComedia = [];

ordenarGeneroArray(
  peliculaArray,
  peliculaTerror,
  peliculaAccion,
  peliculaComedia
);

ordenarDuracionArray(peliculaTerror);
ordenarDuracionArray(peliculaAccion);
ordenarDuracionArray(peliculaComedia);

peliculaTerror.forEach((element) => {
  element.mostrarInformacion();
});

peliculaAccion.forEach((element) => {
  element.mostrarInformacion();
});

peliculaComedia.forEach((element) => {
  element.mostrarInformacion();
});
