import { Videojuegos } from "../clases/Videojuegos";
import {
  ordenarAlfabeticamente,
  ordenarEmpresaArray,
} from "../utilities/Parsear";
import videojuegosJson from "../jsons/ex2/videojuegos.json";

const videojuegosArray = Videojuegos.crearArray(videojuegosJson);
const nintendoArray = [];
const xboxArray = [];
const playStationArray = [];

ordenarEmpresaArray(
  videojuegosArray,
  nintendoArray,
  xboxArray,
  playStationArray
);

ordenarAlfabeticamente(nintendoArray);
ordenarAlfabeticamente(xboxArray);
ordenarAlfabeticamente(playStationArray);

nintendoArray.forEach((element) => {
  element.mostrarInformacion();
});

xboxArray.forEach((element) => {
  element.mostrarInformacion();
});

playStationArray.forEach((element) => {
  element.mostrarInformacion();
});
