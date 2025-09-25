class Configuracion {
    private static instancia: Configuracion;

    private constructor() {}

    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }

    public set(modo: string, modo2: string): void {
        console.log(modo, modo2);
    }

    public get(modo2:string) {
        console.log(modo2);
    }
}

// Uso
const conf1 = Configuracion.obtenerInstancia();
const singleton2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccion");
console.log(singleton2.get("modo"));