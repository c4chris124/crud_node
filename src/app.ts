import express from "express"
import morgan from 'morgan'
import { sequelizeConnection } from './db'
import CursosRoutes from './routes/CursosRoute'
import EstudiantesRoutes from './routes/EstudiantesRoute'
class Application {
    app: express.Application
    
    constructor(){
        this.app = express()
        this.settings()
        this.middleware()
        this.routes()
    }
    
    settings(){
        this.app.set('port', 3000)
    }

    middleware(){
        this.app.use(morgan("dev"))
        this.app.use(express.json)
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(
            (req: express.Request, res: express.Response, next: express.NextFunction) => {
              res.header("Access-Control-Allow-Origin", "http://localhost:3000")
              res.header("Access-Control-Allow-Credentials", "true")
              res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
              )
              res.header(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, DELETE"
              )
              next()
            }
          )
    }

    routes(){
        this.app.use("/cursos", CursosRoutes)
        this.app.use("/estudiantes", EstudiantesRoutes)
    }


    start(){
        sequelizeConnection.sync({force:true}).then(() => {
          this.app.listen(this.app.get('port'), () => {
              console.log(`runnign on port ${this.app.get('port')}`)
          } )
        }).catch((err) => {
          console.error('Unable to sync')
          
        })
    }
}


export default Application

