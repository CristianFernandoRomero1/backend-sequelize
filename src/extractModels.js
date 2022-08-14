//This file extract models from database existing SQL Server, to use it, run in powershell: node src/extractModels.js
import {SequelizeAuto} from 'sequelize-auto';
var auto = new SequelizeAuto('ESSA.BD.CVIDA.INSPECCIONES_TEST', 'cristian', '1234',{
  host: 'GWTN141-10',
  dialect: 'mssql',
  port:'1433'
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});