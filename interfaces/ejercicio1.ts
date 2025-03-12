interface Person{
    name: string;
    address: string;
    age: number;
    info(): void;
}
// 
class Employe implements Person{
    name: string;
    address: string;
    age: number;
    contructor(name: string, address: string, age: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    info() {
        console.log(`esta es la informacion del empleado
            name: ${this.name}`)
    }
}
let diego = new Employe("Diego", "123", 25);
diego.info();
