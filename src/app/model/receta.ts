export interface Receta {
    nombre:       string;
    descripcion?:  string;
    ingredientes?: Ingrediente[];
    estado?:       boolean;
    portada:        string;
    idU?:            string;
    identificador?: string;
    _id?: string

}

interface Ingrediente {
    nombre:   string;
    cantidad: string;
}
