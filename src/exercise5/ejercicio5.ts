import cilindroJson from "./json/cilindro.json";
import esferaJson from "./json/esfera.json";
import cuboJson from "./json/cubo.json";
import { crearArrayCilindro } from "./parser/parsearCilindro";
import { crearArrayEsfera, crearEsfera } from "./parser/parsearEsfera";
import { crearArrayCubo } from "./parser/parserCubo";
import { ordenarCilindro, ordenarCubo, ordenarEsfera } from "./ordenarPrismas";

const arrayCilindro = crearArrayCilindro(cilindroJson);
const arrayEsfera = crearArrayEsfera(esferaJson);
const arrayCubo = crearArrayCubo(cuboJson);

ordenarCilindro(arrayCilindro);
ordenarEsfera(arrayEsfera);
ordenarCubo(arrayCubo);

console.log("Cilindros: ");
arrayCilindro.forEach((element) => {
  element.mostrarInformacion();
});

console.log("Esfera: ");
arrayEsfera.forEach((element) => {
  element.monstrarInformacion();
});

console.log("Cubo: ");
arrayCubo.forEach((element) => {
  element.mostrarInformacion();
});
