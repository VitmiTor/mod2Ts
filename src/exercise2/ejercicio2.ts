import videojuegosJson from "./jsons/videojuegos.json";
import { crearArrayVideojuego } from "./parser/videojuegosParser";
import { ordenarAlfabeticamente, ordenarEmpresaArray } from "./functions";
import { Videojuego } from "./clases/Videojuego";

const videojuegosArray = crearArrayVideojuego(videojuegosJson);
const nintendoArray: Videojuego[] = [];
const xboxArray: Videojuego[] = [];
const playStationArray: Videojuego[] = [];

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
