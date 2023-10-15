import { Circulo } from "./clases/Circulo";
import { Cuadrado } from "./clases/Cuadrado";
import { Triangulo } from "./clases/Triangulo";

export const ordenarArrayCirculo = (arrayCirculos: Circulo[]): void => {
  const n = arrayCirculos.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayCirculos[j].area > arrayCirculos[j + 1].area) {
        const temp = arrayCirculos[j];
        arrayCirculos[j] = arrayCirculos[j + 1];
        arrayCirculos[j + 1] = temp;
      }
    }
  }
};

export const ordenarArrayCuadrados = (arrayCuadrados: Cuadrado[]) => {
  const n = arrayCuadrados.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayCuadrados[j].area > arrayCuadrados[j + 1].area) {
        const temp = arrayCuadrados[j];
        arrayCuadrados[j] = arrayCuadrados[j + 1];
        arrayCuadrados[j + 1] = temp;
      }
    }
  }
};

export const ordenarArrayTriangulo = (arrayTriangulo: Triangulo[]) => {
  const n = arrayTriangulo.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayTriangulo[j].area > arrayTriangulo[j + 1].area) {
        const temp = arrayTriangulo[j];
        arrayTriangulo[j] = arrayTriangulo[j + 1];
        arrayTriangulo[j + 1] = temp;
      }
    }
  }
};
