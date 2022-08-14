import sql from "mssql";
//import getConnection from '../../database/connection.js';
//const pool = await getConnection();
// import pool from "../../app.js";
const inspections={

/*     inspectionList(){
        app.get('/api/hello', (req, res) => {   
         res.send('Hello World!');
        });
    } */
    inspectionList: async (req, res) => {
/*         //const value = req.query.value;
        //const categoria = await Categoria.find({ $or: [{ nombre: new RegExp(value, 'i') }, { descripcion: new RegExp(value, 'i') }] }).sort({ 'createAt': 1 })
        //console.log(req.body);
        const result = await pool.request().query(`SELECT fecha, CONTRATO_ID, INSPECTORES_id, Direccion, id_inspeccion as id FROM inspeccion WHERE INSPECTORES_id = '${req.body.value}'`);
        // const result = await pool.request().query(`SELECT * FROM inspeccion WHERE INSPECTORES_id LIKE CONCAT ('%', ' ${req.body.value}', '%')`);
        // const result = await pool.request().query("SELECT usuario from tablausuarios where usuario like '%'+@value+'%'", { value: req.body.value });
        //console.log(result)
        res.json({
            result: result.recordsets
        }) */
    },
    inspectionCreate: async (req, res) => {
        //const value = req.query.value;
        //const categoria = await Categoria.find({ $or: [{ nombre: new RegExp(value, 'i') }, { descripcion: new RegExp(value, 'i') }] }).sort({ 'createAt': 1 })
  /*       console.log(req.body);
        const result = await pool.request().query(`INSERT INTO inspeccion ("fecha", "Jefe_Trabajo", "Jefe_Sustituto", "equipo_trabajo", "Direccion",  "trabajo_realizar", "consignacion", "consignacion_odt", "cel_avantel","hora_inicial", "hora_final", "Conformidad", "observaciones",  "estado", "INSPECTORES_id", "CONTRATO_ID", "calificacion")  
        VALUES ('2019-07-31', '${req.body.Jefe_Trabajo}', '${req.body.Jefe_Sustituto}', '${req.body.equipo_trabajo}', '${req.body.Direccion}', '${req.body.trabajo_realizar}', '${req.body.consignacion}', '${req.body.consignacion_odt}', '${req.body.cel_avantel}', '2019-07-31 23:48', '2019-07-31 23:48', 'yu', 'tyugyug', 'NO REVISADO', '2', '101', '87')`);
        
        // const result = await pool.request().query(`SELECT * FROM inspeccion WHERE INSPECTORES_id LIKE CONCAT ('%', ' ${req.body.value}', '%')`);
        // const result = await pool.request().query("SELECT usuario from tablausuarios where usuario like '%'+@value+'%'", { value: req.body.value });
        //console.log(result)
        res.status(200);
  */
    }
}
export default inspections;
