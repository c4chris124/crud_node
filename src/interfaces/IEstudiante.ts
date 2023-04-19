import { ICursos } from "./ICursos"


export interface IEstudiante {
    idEstudiante: string
    nombre: string
    apellido: string
    nivel: string
    seccion: string
    cursosAsignados: ICursos
}