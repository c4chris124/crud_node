import { Router, Request, Response, NextFunction } from "express"
import {ICursos} from '../interfaces/ICursos'


const router = Router()

import { MCursos } from "../models/MCursos"

router.get("/",async (req: Request, res: Response) => {
    try {
        const Cursos  = await MCursos.findAll()
        res.send(Cursos)
    } catch (error) {
        res.send(error)
    }
})


router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {nombreCurso,idGrado, idCarrera,catedratico} = req.body as ICursos
        const newCurso = await MCursos.create({
            nombreCurso,
            idGrado,
            idCarrera,
            catedratico,
        })
        res.send(newCurso)
    } catch (error) {
        console.error(error)
    }
})

export default router