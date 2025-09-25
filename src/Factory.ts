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
    crearProducto(tipo: string, datos: { nombre: string; ram: string , procesador:string }): Equipos {
        if (tipo === "Servidor") {
            return new Servidor(datos.nombre, datos.ram, datos.procesador);
        } else if (tipo === "Desktop") {
            return new Desktop(datos.nombre, datos.ram, datos.procesador);
        }
        if (tipo === "Notebook") {
            return new Notebook(datos.nombre, datos.ram, datos.procesador)
        }
        throw new Error("Tipo de producto no soportado");
    }
}

const factory = new EquipoFactory();
const server = factory.crearProducto("Servidor", { nombre: "Dell PowerEdge", ram: "32GB", procesador: "Xenon" });
server.operacion();