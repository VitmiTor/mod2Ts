import { Cilindro } from "../clases/Cilindro";

export const crearArrayCilindro = (cilindroJson: any): Cilindro[] => {
  const arraycCilindro: Cilindro[] = [];

  cilindroJson.forEach((element: any) => {
    arraycCilindro.push(crearCilindro(element));
  });

  return arraycCilindro;
};

export const crearCilindro = (cilindroJson: any): Cilindro => {
  const radio = cilindroJson["radio"];
  const altura = cilindroJson["altura"];

  return new Cilindro(radio, altura);
};
