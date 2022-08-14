import sql from "mssql";
//import getConnection from "../database/connection.js";
import { tablausuarios } from "../models/tablausuarios.js";
import { sequelize } from "../database/sequelize.js";

//const pool = await getConnection();

const inspections = {
  auth: async (req, res) => {
    console.log(req.body);
    /*     const result = await pool
      .request()
      .query(
        `SELECT * FROM tablausuarios WHERE usuario = '${req.body.usuario}' AND password = '${req.body.password}'`
      );
    if (result.recordset.length > 0) {

      console.log("dentro de bien", result.recordset
      );
      res.status(200).json({
        result: result.recordsets,
      });
    } else {
      console.log("dentro de mal", result.recordset);

      res.status(401).json();
    } */
  },
  listar: async (req, res) => {
    tablausuarios.findAll().then((users) => {
      console.log(users);
      sequelize.close();
      res.json({
        result: users,
      });
    });
  },
};
export default inspections;
