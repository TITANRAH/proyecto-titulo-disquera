export interface Disco {

    id?: number | null,
    titulo: string
    descripcion: string,
    precio: number,
    fechaPublicacion: Date,
    autor: {
        id: string,
        seudonimo: string
    }
}

// export interface Autor {

//     id: string, 
//     seudonimo: string
// }