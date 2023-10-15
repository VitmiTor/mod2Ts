import figuraJson from "./jsons/figuras.json";
import colorJson from "./jsons/colores.json";
import { Circulo } from "./clases/Circulo";
import { Triangulo } from "./clases/Triangulo";
import { Cuadrado } from "./clases/Cuadrado";
import { crearMapColores } from "./parser/colorParser";
import { rellernarArrayFiguras } from "./parser/figurasParser";
import {
  ordenarArrayCirculo,
  ordenarArrayCuadrados,
  ordenarArrayTriangulo,
} from "./ordenar";

const circuloArray: Circulo[] = [];
const trianguloArray: Triangulo[] = [];
const cuadradoArray: Cuadrado[] = [];

const mapColores = crearMapColores(colorJson);

rellernarArrayFiguras(
  figuraJson,
  circuloArray,
  cuadradoArray,
  trianguloArray,
  mapColores
);

ordenarArrayCirculo(circuloArray);
ordenarArrayCuadrados(cuadradoArray);
ordenarArrayTriangulo(trianguloArray);

console.log("Circulos: ========");
circuloArray.forEach((element) => {
  element.imprimirInformacion();
});

console.log("Cuadrados: =======");
cuadradoArray.forEach((element) => {
  element.imprimirInformacion();
});

console.log("Triangulos: ======");

trianguloArray.forEach((element) => {
  element.imprimirInformacion();
});
