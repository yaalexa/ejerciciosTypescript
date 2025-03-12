//? opcion
//& interseccion

interface Automovil{
    marca: string;
    modelo?: string; // propiedad modelo opcional
    precio?: number; 
    mostrarInfo(): void;
}

class Moto implements Automovil {
    marca: string="";
    get _marca():string {
        return this.marca
    }
    set _marca(nuevamarca:string) {
        this.marca = nuevamarca;
    }
    mostrarInfo():void {
        console.log(`mi marca es ${this.marca}`)
    }
}

const auto: Automovil = new Moto();
auto.marca = "chevrolet";
console.log(auto);
console.log(auto.marca)