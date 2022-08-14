import sql from "mssql";
import 'dotenv/config';
const dbSettings = {
     database :
        process.env.DATABASE_NAME ||
        "test",
     user :
        process.env.DATABASE_USER ||
        "sa",
     password :    process.env.DATABASE_PASSWORD ||
        "123456",
     server :   process.env.DATABASE_SERVER || 
        "localhost",
     port : +process.env.DATABASE_PORT ||    //Add + to convert string to number
        1433,
        options: {
            trustServerCertificate : true,
            encrypt: true,
        }
};

async function getConnection(){
    try {
        const connection = await sql.connect(dbSettings);
        console.log("Connected to database");
        return connection;
    }
    catch(err){
        console.log(err);

    }
    
    //const result = await pool.request().query("SELECT 1 as result");

}

export default getConnection;