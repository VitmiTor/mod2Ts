import { Cubo } from "../clases/Cubo";

export const crearArrayCubo = (cuboJson: any): Cubo[] => {
  const arrayCubo: Cubo[] = [];

  cuboJson.forEach((element: any) => {
    arrayCubo.push(crearCubo(element));
  });

  return arrayCubo;
};

const crearCubo = (cuboJson: any): Cubo => {
  const lado = cuboJson["lado"];

  return new Cubo(lado);
};
