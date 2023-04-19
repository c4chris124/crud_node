import { Sequelize, DataTypes } from 'sequelize'
import { sequelizeConnection } from '../db'
const sequelize = new Sequelize('mysql::memory')


export const MCursos = sequelize.define('Cursos', {
    idCurso: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombreCurso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idGrado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCarrera: {
        type: DataTypes.STRING,
        allowNull: false
    },
    catedratico: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
})

sequelizeConnection.sync({force: true})
    .then(() => console.log('Mcurosos created'))
    .catch((err) => console.error('Unable to created it', err))