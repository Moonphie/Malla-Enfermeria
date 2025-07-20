const malla = [
  { semestre: 1, codigo: "CBI111", asignatura: "Biología Celular", prerrequisito: "-" },
  { semestre: 1, codigo: "LIC001", asignatura: "Fundamentos del actuar comunitario", prerrequisito: "-" },
  { semestre: 1, codigo: "MAT110", asignatura: "Introd. a la Matemática Aplicada", prerrequisito: "-" },
  { semestre: 1, codigo: "MYF101", asignatura: "Morfología y Función", prerrequisito: "-" },
  { semestre: 1, codigo: "ENF102", asignatura: "Intro. a los Estudios de la Enfermería", prerrequisito: "-" },
  { semestre: 1, codigo: "ENF110", asignatura: "Primeros Auxilios", prerrequisito: "-" },
  { semestre: 2, codigo: "ENF201", asignatura: "Enfermería en el curso de vida humana", prerrequisito: "Intro. a los Estudios Profesionales - Primeros Auxilios" },
  { semestre: 2, codigo: "LCE001", asignatura: "Inglés I", prerrequisito: "-" },
  { semestre: 2, codigo: "CBI202", asignatura: "Histoembriología", prerrequisito: "Biología Celular - Morfología y Función" },
  { semestre: 2, codigo: "CQU203", asignatura: "Fundamentos de Química y Bioquímica para el área de la salud", prerrequisito: "Introd. a la Matemática Aplicada" },
  { semestre: 2, codigo: "LIC002", asignatura: "Fundamentos éticos del actuar comunitario", prerrequisito: "Fundamentos del actuar comunitario" },
  { semestre: 3, codigo: "AES519", asignatura: "Bioestadística", prerrequisito: "Introd. a la Matemática Aplicada" },
  { semestre: 3, codigo: "ENF301", asignatura: "Cuidados de Enfermería del Niño y Adolescente", prerrequisito: "Enfermería en el curso de vida humana" },
  { semestre: 3, codigo: "MYF301", asignatura: "Fisiopatología I", prerrequisito: "Histoembriología" },
  { semestre: 3, codigo: "ENF310", asignatura: "Salud Familiar y Comunitaria", prerrequisito: "Fundamentos éticos del actuar comunitario" },
  { semestre: 3, codigo: "LCE002", asignatura: "Inglés II", prerrequisito: "Inglés I" },
  { semestre: 4, codigo: "ENF401", asignatura: "Cuidados de Enfermería del Adulto I", prerrequisito: "Fisiopatología I - Cuidados del Niño y Adolescente" },
  { semestre: 4, codigo: "ENF410", asignatura: "Enfermería Médico Quirúrgica", prerrequisito: "Cuidados del Niño y Adolescente" },
  { semestre: 4, codigo: "ENF420", asignatura: "Salud Mental", prerrequisito: "Salud Familiar y Comunitaria" },
  { semestre: 4, codigo: "MYF401", asignatura: "Fisiopatología II", prerrequisito: "Fisiopatología I" },
  { semestre: 5, codigo: "ENF501", asignatura: "Cuidados de Enfermería del Adulto II", prerrequisito: "Cuidados del Adulto I - Enfermería Médico Quirúrgica" },
  { semestre: 5, codigo: "ENF510", asignatura: "Cuidados de Enfermería del Adulto Mayor", prerrequisito: "Cuidados del Adulto I" },
  { semestre: 5, codigo: "ENF520", asignatura: "Gestión del Cuidado I", prerrequisito: "Salud Mental - Cuidados del Adulto I" },
  { semestre: 5, codigo: "LCE003", asignatura: "Inglés III", prerrequisito: "Inglés II" },
  { semestre: 6, codigo: "ENF601", asignatura: "Enfermería en situaciones críticas", prerrequisito: "Cuidados del Adulto II" },
  { semestre: 6, codigo: "ENF610", asignatura: "Gestión del Cuidado II", prerrequisito: "Gestión del Cuidado I" },
  { semestre: 6, codigo: "ENF620", asignatura: "Enfermería del Recién Nacido y Niños Hospitalizados", prerrequisito: "Cuidados del Niño y Adolescente" },
  { semestre: 6, codigo: "LIC003", asignatura: "Gestión del conocimiento", prerrequisito: "Bioestadística" },
  { semestre: 7, codigo: "ENF701", asignatura: "Internado Profesional I: Atención Cerrada", prerrequisito: "Enfermería en situaciones críticas - Enfermería del Recién Nacido" },
  { semestre: 7, codigo: "ENF710", asignatura: "Internado Profesional II: Atención Abierta", prerrequisito: "Gestión del Cuidado II - Enfermería del Adulto Mayor" },
  { semestre: 8, codigo: "ENF801", asignatura: "Internado Profesional III: Integrado", prerrequisito: "Internado I y II" },
  { semestre: 8, codigo: "TFE801", asignatura: "Trabajo Final de Título", prerrequisito: "Gestión del Conocimiento" }
];

const agrupadoPorAño = {};
malla.forEach(ramo => {
  const año = Math.ceil(ramo.semestre / 2);
  if (!agrupadoPorAño[año]) {
    agrupadoPorAño[año] = [];
  }
  agrupadoPorAño[año].push(ramo);
});

const container = document.getElementById("malla-container");

Object.keys(agrupadoPorAño).sort((a, b) => a - b).forEach(año => {
  const grupo = agrupadoPorAño[año];
  const añoDiv = document.createElement("div");
  añoDiv.innerHTML = `<h2 class="año-titulo">${año}° Año</h2>`;
  container.appendChild(añoDiv);
  const grilla = document.createElement("div");
  grilla.classList.add("grilla");
  grupo.forEach(ramo => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${ramo.asignatura}</h3>
      <p><strong>Código:</strong> ${ramo.codigo}</p>
      <p><strong>Semestre:</strong> ${ramo.semestre}</p>
      <p><strong>Prerrequisito:</strong> ${ramo.prerrequisito}</p>
    `;
    grilla.appendChild(card);
  });
  container.appendChild(grilla);
});
