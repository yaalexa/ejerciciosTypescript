interface Empleado{
    nombre: string;
    salario: number;
    info(): void;
}

class Gerente implements Empleado{
    nombre: string;
    salario: number;
    departamento: string;
    constructor(nombre: string, salario: number, departamento: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }
    info() {
        console.log(`la informacion del gerente es:
            ${this.nombre}`)
    }
    bonificacion(valor:number): number{
        let bonificacion = this.salario * valor;
        return bonificacion;
    }
}
class Desarrollador implements Empleado{
    nombre: string;
    salario: number;
    lenguaje: string;
    constructor(nombre: string, salario: number, lenguaje: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.lenguaje = lenguaje;
    }
    info() {
         console.log(`la informacion del Desarrollador es:
            ${this.nombre}`)
    }
}
class Diseñador implements Empleado{
     nombre: string;
    salario: number;
    especialidad: string
    constructor(nombre: string, salario: number, especialidad: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.especialidad = especialidad;
    }
    info() {
         console.log(`la informacion del Desarrollador es:
            ${this.nombre}`)
    }
}

const empleaditos: Empleado[] = [
    new Gerente("carlos", 8000, "ventas"),
    new Desarrollador("victor", 3500, "typescript"),
    new Diseñador("jhon", 2500, "UI")
];
empleaditos.forEach((emp) => {
    emp.info();
});

const gerentecito = new Gerente("pedro", 7000, "produccion");
const desarrolladorcito = new Desarrollador("chaguendo", 2000, "javascript");
const empleados2: Empleado[] = [
    gerentecito,
    desarrolladorcito
];
empleados2.forEach((emp) => {
    emp.info();
});
console.log(gerentecito.bonificacion(0.12));
