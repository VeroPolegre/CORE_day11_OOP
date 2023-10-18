const persona = document.getElementById("persona");
const estudiante = document.getElementById("estudiante");
const profesora = document.getElementById("profesora");
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    persona.innerHTML = `Esta persona se llama ${this.nombre}, tiene  ${this.edad} años y es ${this.genero}.`;
  }
}
const pePersona = new Persona("Pepe", "28", "hombre");
console.log(pePersona.obtDetalles());

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.edad = edad;
    this.grupo = grupo;
  }
  registrar() {
    estudiante.innerHTML = `Este estudiante se llama ${this.nombre}, tiene  ${this.edad} años y es ${this.genero}. Y cursa ${this.curso} en el grupo ${this.grupo}.`;
  }
}

const estudiantePaco = new Estudiante("Paco", "33", "hombre", "3o", "B");
console.log(estudiantePaco.registrar());

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    profesora.innerHTML = `Este profesor se llama ${this.nombre}, tiene  ${this.edad} años y es ${this.genero}. Da la asignatura de ${this.asignatura} de nivel ${this.nivel}.`;
  }
}

const profesoraMari = new Profesor(
  "Mari",
  "45",
  "mujer",
  "Química",
  "intermedio"
);
console.log(profesoraMari.asignar());
