/**
 * Modelo para representar NaveEspacial, esta la clase padre
 */
export class NaveEspacial {

  idNaveEspacial: number;
  nombre: string;
  potencia: number;
  pais: string;
  peso: number;

  constructor(idNaveEspacial: number, nombre: string, potencia: number, pais: string,peso: number){
    this.idNaveEspacial = idNaveEspacial;
    this.nombre = nombre;
    this.potencia = potencia;
    this.pais = pais;
    this.peso =peso;
  }

}
