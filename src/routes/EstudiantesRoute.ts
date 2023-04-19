import { Router, Request, Response, NextFunction } from "express"
import {IEstudiante} from '../interfaces/IEstudiante'


const router = Router()

import { MEstudiante } from "../models/MEstudiante"
import { MCursos } from "../models/MCursos"

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Estudiantes  = await MEstudiante.findAll()
        res.send(Estudiantes)
    } catch (error) {
        res.send(error)
    }

})


router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {idEstudiante} = req.params
        const Estudiante  = await MEstudiante.findOne({
            include: MCursos,
            where: {
                idEstudiante
            }
        })
        res.send(Estudiante)
    } catch (error) {
       res.send(error)
    }

})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {nombre, apellido, cursosAsignados, nivel, seccion} = req.body as IEstudiante
        const newEstudiante = await MEstudiante.create({
            nombre,
            apellido,
            cursosAsignados,
            nivel,
            seccion,
        })
        res.send(newEstudiante)
    } catch (error) {
        console.error(error)
    }
})


router.put('/:id',async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {idEstudiante} = req.params
        const {nombre}  = req.body
        const updatedEstudiante = await MEstudiante.update({nombre}, {
            where: {idEstudiante}
        })
        res.send(updatedEstudiante)
    } catch (error) {
        console.error(error);
    }
})

router.put('/:id',async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {idEstudiante} = req.params
        const deltedEstudiante = await MEstudiante.destroy({
            where: {
                idEstudiante
            }
        })
        res.send(deltedEstudiante)
    } catch (error) {
        console.error(error);
        
    }
})



export default router