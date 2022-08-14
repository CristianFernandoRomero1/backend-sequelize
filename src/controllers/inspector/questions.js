//import getConnection from '../../database/connection.js';
// const pool = await getConnection();

const questions={

    categoryList: async (req, res) => {
 /*        const result = await pool.request().query(`SELECT * FROM preguntas_categoria`);
        // const result = await pool.request().query(`SELECT * FROM preguntas_categoria`);

        res.json({
            result: result.recordsets
        }) */
    },
    questionList: async (req, res) => {
    /*     const result = await pool.request().query(`
        SELECT preguntas_categoria.id_pre_cat AS 'idCat',
        preguntas_categoria.codigo_orden AS 'catOrden',
        preguntas_categoria.descripcion_corta AS 'catDesCor',
        preguntas_categoria.descripcion_larga AS 'catDesLar',
        preguntas.id_preguntas AS 'idPre',
        preguntas.codigo_orden AS 'preCod',
        preguntas.descripcion_corta AS 'preDesCor',
        preguntas.descripcion_larga AS 'preDesLar',
        preguntas.estado AS 'preEst'

        FROM preguntas INNER JOIN preguntas_categoria ON preguntas_categoria.id_pre_cat = preguntas.PREGUNTAS_CATEGORIA_id WHERE preguntas.habilitado = 'Si'
        ORDER BY preguntas_categoria.id_pre_cat, CAST(REPLACE(preguntas.codigo_orden, '.', '') AS int)
        `);
        // const result = await pool.request().query(`SELECT * FROM preguntas`);

        res.json({
            result: result.recordsets
        }) */
    },
   
}
export default questions;
