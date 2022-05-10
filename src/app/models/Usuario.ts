export class Usuario {

    constructor(
        private nombre : string,
        private password : string
    ){}

    setNombre(nombre : string) {
        this.nombre = nombre;
    }
    getNombre() : string {
        return this.nombre;
    }

    setPassword(pass : string) {
        this.password = pass;
    }
    getPassword() : string {
        return this.password;
    }


}