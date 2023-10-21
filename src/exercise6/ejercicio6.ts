import { ordenarCilindro } from "../exercise5/ordenarPrismas";
import { Abogado } from "./clases/Abogado";
import { Dentista } from "./clases/Dentista";
import { Ingeniero } from "./clases/Ingeniero";
import amigosJson from "./json/amigosPromocion.json";
import {
  ordenarAbogados,
  ordenarDentista,
  ordenarIngeniero,
} from "./parser/ordenarPersona";
import { rellenarPersonas } from "./parser/parserPersona";

const arrayAbogados: Abogado[] = [];
const arrayDentistas: Dentista[] = [];
const arrayIngenieros: Ingeniero[] = [];

rellenarPersonas(amigosJson, arrayIngenieros, arrayDentistas, arrayAbogados);

ordenarAbogados(arrayAbogados);
ordenarIngeniero(arrayIngenieros);
ordenarDentista(arrayDentistas);

console.log(`Abogados ========================`);
arrayAbogados.forEach((element) => {
  element.mostrarInformacion();
});

console.log(`Ingenieros ========================`);
arrayIngenieros.forEach((element) => {
  element.mostrarInformacion();
});

console.log(`Dentista ========================`);
arrayDentistas.forEach((element) => {
  element.mostrarInformacion();
});
