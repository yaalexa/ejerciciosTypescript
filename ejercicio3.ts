interface ControlDispositivos{
    encenderDispositivo(nombre: string): void;
    apagarDispositivo(nombre: string): void;
    obtenerDispositivo(nombre: string): string;
}
interface AutomatizacionHogar{
    crearAutomatizacion(nombre:string,acciones:string[]):void;
    eliminarAutomatizacion(nombre:string):void;
    ejecutarAutomatizacion(nombre:string):void;
}
class CasaInteligente implements ControlDispositivos, AutomatizacionHogar{
    public dispositivo: string;
    constructor(dispositivo: string) {
        this.dispositivo = dispositivo;
    }
    encenderDispositivo(nombre:string):void {
        this.dispositivo = nombre;
        console.log(`el dispositivo a encender es:${this.dispositivo}`)
    }
    apagarDispositivo(nombre: string): void{
         this.dispositivo = nombre;
        console.log(`el dispositivo a apagar es:${this.dispositivo}`)
    }
    obtenerDispositivo(nombre: string):string{
        this.dispositivo = nombre;
        return this.dispositivo;
    }
    crearAutomatizacion(nombre: string, acciones: string[]): void{
        console.log(`la automatizacion creada es: ${nombre}
            y la acciones son: ${acciones}`)
    }
    eliminarAutomatizacion(nombre: string): void{
        console.log(`la automatizacion eliminada es: ${nombre}`)
    }
    ejecutarAutomatizacion(nombre:string):void {
         console.log(`la automatizacion a ejecutar es: ${nombre}`)
    }
}

const micasa = new CasaInteligente("refrigerador");
micasa.encenderDispositivo("bombillaInteligente");

const micasita: ControlDispositivos & AutomatizacionHogar = new CasaInteligente("Licuadora");
micasita.encenderDispositivo("Nevecon");