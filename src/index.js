//const app = express();
/* import bodyParser from 'body-parser';
import cors from 'cors';

import getConnection from './database/connection.js';
import app from './app.js';

app.listen( +process.env.BACKEND_PORT, (req, res) => {
    console.log(`Server started on port ${process.env.BACKEND_PORT}`);
}) */

import {} from "dotenv/config.js";
import Server from "./app.js";


const server = new Server();

server.listen();