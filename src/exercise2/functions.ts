import { Videojuego } from "./clases/Videojuego";

export const ordenarEmpresaArray = (
  videojuegosArray: Videojuego[],
  nintendoArray: Videojuego[],
  xboxArray: Videojuego[],
  playStationArray: Videojuego[]
): void => {
  videojuegosArray.forEach((juego: Videojuego) => {
    switch (juego.empresa) {
      case "XBOX":
        xboxArray.push(juego);
        break;
      case "NINTENDO":
        nintendoArray.push(juego);
        break;
      case "PLAY STATION":
        playStationArray.push(juego);
        break;
    }
  });
};

export const ordenarAlfabeticamente = (nombreArray: Videojuego[]): void => {
  for (let i = 0; i < nombreArray.length; i++) {
    for (let j = 0; j < nombreArray.length - i - 1; j++) {
      if (nombreArray[j].nombre.localeCompare(nombreArray[j + 1].nombre) > 0) {
        const temp = nombreArray[j];
        nombreArray[j] = nombreArray[j + 1];
        nombreArray[j + 1] = temp;
      }
    }
  }
};
