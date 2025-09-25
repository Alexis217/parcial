interface Equipos {
    operacion(): void;
}

class Servidor implements Equipos {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    operacion(): void {
        console.log("servidor:", this.nombre, this.ram, this.procesador);
    }
}

class Desktop implements Equipos {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    operacion(): void {
        console.log("desktop:", this.nombre, this.ram, this.procesador);
    }
}

class Notebook implements Equipos {
    constructor(private nombre: string, private ram: string, private procesador: string) {}
    operacion(): void {
        console.log("notebook:", this.nombre, this.ram, this.procesador);
    }
}

class EquipoFactory {
    crearProducto(tipo: string, nombre: string, ram:string, procesador:string): Equipos {
        if (tipo === "Servidor") {
            return new Servidor(nombre,ram,procesador);
        } else if (tipo === "Desktop") {
            return new Desktop(nombre,ram,procesador);
        }
        if (tipo === "Notebook") {
            return new Notebook(nombre,ram,procesador)
        }
        throw new Error("Tipo de producto no soportado");
    }
}

const factory = new EquipoFactory();
const server = factory.crearProducto("Servidor", "Dell PowerEdge con", "32GB RAM", "y procesador Xenon");
server.operacion();