import { createConnection } from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config() // must have

var connection = createConnection({
    //MYSQL from local
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    //MYSQL from infinityfree
    // host: process.env.HOST_INFINITY_FREE,
    // user: process.env.USER_INFINITY_FREE,
    // password: process.env.PASSWORD_INFINITY_FREE,
    // database: process.env.DATABASE_INFINITY_FREE,
});

connection.connect(async(err, connection) => {
    if(err) console.log("Database connection has error");
});

export default connection;