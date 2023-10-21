import { Abogado } from "../clases/Abogado";
import { Dentista } from "../clases/Dentista";
import { Ingeniero } from "../clases/Ingeniero";

export const ordenarAbogados = (arrayAbogado: Abogado[]) => {
  const n = arrayAbogado.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayAbogado[j].exito > arrayAbogado[j + 1].exito) {
        const temp = arrayAbogado[j];
        arrayAbogado[j] = arrayAbogado[j + 1];
        arrayAbogado[j + 1] = temp;
      }
    }
  }
};

export const ordenarDentista = (arrayDentista: Dentista[]) => {
  const n = arrayDentista.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayDentista[j].exito > arrayDentista[j + 1].exito) {
        const temp = arrayDentista[j];
        arrayDentista[j] = arrayDentista[j + 1];
        arrayDentista[j + 1] = temp;
      }
    }
  }
};

export const ordenarIngeniero = (arrayIngeniero: Ingeniero[]) => {
  const n = arrayIngeniero.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayIngeniero[j].exito > arrayIngeniero[j + 1].exito) {
        const temp = arrayIngeniero[j];
        arrayIngeniero[j] = arrayIngeniero[j + 1];
        arrayIngeniero[j + 1] = temp;
      }
    }
  }
};
