export class MendiMartxa {

    constructor(
        private nombre : string,
        private ciudad : string,
        private distancia : number,
        private fecha : string,
        private participantes : number
    ) {}

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(value: string) {
        this.nombre= value;
    }

    public getDistancia(): number {
        return this.distancia;
    }
    public setDistancia(value: number) {
        this.distancia= value;
    }

    public getCiudad(): string {
        return this.ciudad;
    }
    public setCiudad(value: string) {
        this.ciudad = value;
    }

    public getFecha(): string {
        return this.fecha;
    }
    public setFecha(value: string) {
        this.fecha = value;
    }

    public getParticipantes(): number {
        return this.participantes;
    }
    public setParticipantes(value: number) {
        this.participantes = value;
    }
   
}