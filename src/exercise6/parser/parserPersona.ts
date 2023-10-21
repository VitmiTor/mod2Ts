import { Abogado } from "../clases/Abogado";
import { Dentista } from "../clases/Dentista";
import { Ingeniero } from "../clases/Ingeniero";

export const rellenarPersonas = (
  personasJson: any,
  arrayIngeniero: Ingeniero[],
  arrayDentista: Dentista[],
  arrayAbogado: Abogado[]
) => {
  personasJson.forEach((element: any) => {
    switch (element.tipo) {
      case "ABOGADO":
        const abogado = new Abogado(
          element["nombre"],
          element["apellido"],
          element["edad"],
          element["tipo"],
          element["juiciosGanados"],
          element["juiciosParticipados"],
          element["notaria"]
        );
        arrayAbogado.push(abogado);
        break;

      case "DENTISTA":
        const dentista = new Dentista(
          element["nombre"],
          element["apellido"],
          element["edad"],
          element["tipo"],
          element["pacientesSinCaries"],
          element["totalPacientes"],
          element["consultorio"]
        );
        arrayDentista.push(dentista);
        break;

      case "INGENIERO":
        const ingeniero = new Ingeniero(
          element["nombre"],
          element["apellido"],
          element["edad"],
          element["tipo"],
          element["edificiosConstruidos"],
          element["edificiosPlanificados"],
          element["constructora"]
        );
        arrayIngeniero.push(ingeniero);
      default:
        break;
    }
  });
};
