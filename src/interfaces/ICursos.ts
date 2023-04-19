export interface ICursos {
    idCurso: string
    nombreCurso: string
    idGrado: string
    idCarrera: string
    catedratico: ICatedratico
}

export interface ICatedratico {
    idCatedratico: string
    nombreCatedratico: string
}