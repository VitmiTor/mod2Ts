import { Cilindro } from "./clases/Cilindro";
import { Cubo } from "./clases/Cubo";
import { Esfera } from "./clases/Esfera";

export const ordenarCilindro = (arrayCilindro: Cilindro[]): void => {
  const n = arrayCilindro.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayCilindro[j].volumen > arrayCilindro[j + 1].volumen) {
        const temp = arrayCilindro[j];
        arrayCilindro[j] = arrayCilindro[j + 1];
        arrayCilindro[j + 1] = temp;
      }
    }
  }
};

export const ordenarEsfera = (arrayEsfera: Esfera[]): void => {
  const n = arrayEsfera.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayEsfera[j].volumen > arrayEsfera[j + 1].volumen) {
        const temp = arrayEsfera[j];
        arrayEsfera[j] = arrayEsfera[j + 1];
        arrayEsfera[j + 1] = temp;
      }
    }
  }
};

export const ordenarCubo = (arrayCubo: Cubo[]): void => {
  const n = arrayCubo.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayCubo[j].volumen > arrayCubo[j + 1].volumen) {
        const temp = arrayCubo[j];
        arrayCubo[j] = arrayCubo[j + 1];
        arrayCubo[j + 1] = temp;
      }
    }
  }
};
