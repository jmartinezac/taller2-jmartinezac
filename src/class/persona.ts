export class Persona {
  tipoIdentificacion: number;
  numeroIdentificacion: number;
  nombres: string;
  apellidos: string;
  celular: number;
  correo: string;
  linkedin: string;
  github: string;

  constructor(
    tipoIdentificacion: number,
    numeroIdentificacion: number,
    nombres: string,
    apellidos: string,
    celular: number,
    correo: string,
    linkedin: string,
    github: string
  ) {
    (this.tipoIdentificacion = tipoIdentificacion),
      (this.numeroIdentificacion = numeroIdentificacion),
      (this.nombres = nombres),
      (this.apellidos = apellidos),
      (this.celular = celular),
      (this.correo = correo),
      (this.linkedin = linkedin),
      (this.github = github);
  }
}
