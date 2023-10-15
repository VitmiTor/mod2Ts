import { Circulo } from "../clases/Circulo";
import { Color } from "../clases/Color";
import { Cuadrado } from "../clases/Cuadrado";
import { Triangulo } from "../clases/Triangulo";

export const rellernarArrayFiguras = (
  figuraJson: any,
  arrayCirculos: Circulo[],
  arrayCuadrados: Cuadrado[],
  arrayTriangulos: Triangulo[],
  colorMap: Map<string, Color>
) => {
  figuraJson.forEach((element: any) => {
    const tipo = element["tipo"];
    const colorRelleno = colorMap.get(element["colorRelleno"]);
    const colorBorde = colorMap.get(element["colorBorde"]);

    switch (tipo) {
      case "CUADRADO":
        arrayCuadrados.push(
          crearCuadrado(element, tipo, colorBorde, colorRelleno)
        );
        break;

      case "TRIANGULO":
        arrayTriangulos.push(
          crearTriangulo(element, tipo, colorBorde, colorRelleno)
        );
        break;

      case "CIRCULO":
        arrayCirculos.push(
          crearCirculo(element, tipo, colorBorde, colorRelleno)
        );
        break;

      default:
        console.log(`${tipo} No es una figura geometrica`);
        break;
    }
  });
};

const crearCuadrado = (
  cuadradoJson: any,
  tipo: string,
  colorBorde: Color,
  colorRelleno: Color
) => {
  const lado = cuadradoJson["lado"];
  const grosorLinea = cuadradoJson["grosorLinea"];

  return new Cuadrado(colorRelleno, colorBorde, grosorLinea, tipo, lado);
};

const crearCirculo = (
  circuloJson: any,
  tipo: string,
  colorBorde: Color,
  colorRelleno: Color
) => {
  const radio = circuloJson["radio"];
  const grosorLinea = circuloJson["grosorLinea"];

  return new Circulo(colorRelleno, colorBorde, grosorLinea, tipo, radio);
};

const crearTriangulo = (
  trianguloJson: any,
  tipo: string,
  colorBorde: Color,
  colorRelleno: Color
) => {
  const lado1 = trianguloJson["lado1"];
  const lado2 = trianguloJson["lado2"];
  const lado3 = trianguloJson["lado3"];

  const grosorLinea = trianguloJson["grosorLinea"];
  return new Triangulo(
    colorRelleno,
    colorBorde,
    grosorLinea,
    tipo,
    lado1,
    lado2,
    lado3
  );
};
