import { ObjectType } from "../node_modules/typescript/lib/typescript.js";
import { Persona } from "./class/persona.js";

const nombres = document.getElementById("tipoDocumento") as HTMLElement;

const btnGuardar = document.getElementById("btnGuardar") as HTMLButtonElement;

btnGuardar.addEventListener("click", (e) => {
  console.log("Click en Guardar");
  e.preventDefault();
  const tipoDocumento = document.getElementById(
    "tipoDocumento"
  ) as HTMLSelectElement;
  const numeroIdentificacion = document.getElementById(
    "numeroDocumento"
  ) as HTMLInputElement;
  const nombres = document.getElementById("nombres") as HTMLInputElement;
  const apellidos = document.getElementById("apellidos") as HTMLInputElement;
  const celular = document.getElementById("celular") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const linkedin = document.getElementById("linkedin") as HTMLInputElement;
  const github = document.getElementById("github") as HTMLInputElement;

  const usuario = new Persona(
    parseInt(tipoDocumento.value),
    parseInt(numeroIdentificacion.value),
    nombres.value,
    apellidos.value,
    parseInt(celular.value),
    email.value,
    linkedin.value,
    github.value
  );

  console.log(usuario);

  registroUsuarios(usuario);
});

const registroUsuarios = (usuario: Persona) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ";

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  };

  fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
