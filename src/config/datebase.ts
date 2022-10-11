import  * as path from "path";
export default{
    type:"mysql",
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    entitys:[path.join(__dirname,'../','**/**/**.entity{.ts,.js}')],
    // synchronize:true
}   