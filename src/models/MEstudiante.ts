import { Sequelize, DataTypes } from 'sequelize'
import { sequelizeConnection } from '../db'
const sequelize = new Sequelize('mysql::memory')

export const MEstudiante = sequelize.define('Estudiante', {
    idEstudiante: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelizeConnection.sync({force: true})
    .then(() => console.log('MEstudiantes created'))
    .catch((err) => console.error('Unable to created Estudiantes', err))