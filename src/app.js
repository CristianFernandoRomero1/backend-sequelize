/* import express from 'express';
import 'dotenv/config';
import getConnection from './database/connection.js';
import inspections from './routes/inspector/inspections.js';
 */
//const app = express();
//getConnection();
/* app.set('port', 5000);
app.use(inspections); 

app.listen( +process.env.BACKEND_PORT, (req, res) => {
    console.log(`Server started on port ${process.env.BACKEND_PORT}`);
})

export default app; */


import express from 'express';
import cors from "cors";
import getConnection from './database/connection.js';
import {getConnectionSequelize} from './database/sequelize.js';
import {} from "dotenv/config.js";
import inspections from './routes/inspector/inspections.js';
import questions from './routes/inspector/questions.js';
import login from './routes/login.js';
import bodyParser from 'body-parser';

class Server {
    constructor() {
        //Servidor
        this.port = 5000;
        this.app = express();
        this.conectarBD();
        this.middlewares();
        this.routes();
        //Conectar a la BD
        //Dar a conocer middlewar
        //Rutas
    }
    routes() {
        this.app.use('/api/inspector/inspections', inspections);
        this.app.use('/api/inspector/questions', questions);
        this.app.use('/api/login', login);

    }
    async conectarBD() {
         //await getConnection();
         await getConnectionSequelize();

    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))



    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

}


export default Server