interface Reptil{
    tipoReptil?: string;
    mostrarInfo(): void;
}
interface Volador{
    mostrarInfo(): void;
}

interface Animalitos extends Reptil{
    nombre: string;
    mostrarInfo(): void;
}
class Animal implements Animalitos,Volador {
    public nombre: string;
    public tipoReptil: string;
    constructor(nombre:string) {
        this.nombre = nombre;
    }
    mostrarInfo(): void {
        console.log(`el nombre del animal es: ${this.nombre}`)
    }
}
const animalitos1: Animalitos & Volador = new Animal("coco");
animalitos1.mostrarInfo();
const animalitos2 = new Animal("coco");
animalitos2.mostrarInfo();
