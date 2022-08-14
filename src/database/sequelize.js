import Sequelize from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(/* process.env.DATABASE_NAME , process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_SERVER,
    dialect: 'mssql'
  } */
  
  "ESSA.BD.CVIDA.INSPECCIONES_TEST", "cristian", "1234", {
    host: "GWTN141-10",
    dialect: 'mssql'
  }
  );
  async function getConnectionSequelize(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export {sequelize, getConnectionSequelize};
