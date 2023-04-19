import sequelize, {Sequelize} from "sequelize";
import { MCursos } from "./models/MCursos";
import { MEstudiante } from "./models/MEstudiante";
const sequelizeConnection = new Sequelize(
    'chris_test',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized:false
            }
        }
    }
)

sequelizeConnection.authenticate().then(() => {
    console.log('Connection established');
    
}).catch((err) => {
    console.error('Unable to connect')
    
})

// MEstudiante.belongsToMany(MCursos, {through: 'Cursos'})
// MCursos.belongsToMany(MEstudiante, {through: 'Estudiante'})

// const modelDefiner = [MCursos, MEstudiante ]

// modelDefiner.forEach(model => model(sequelizeConnection))
// let entries = Object.entries(sequelizeConnection.models)
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])




export {
    sequelizeConnection
}