const {createPool} =require('mysql');
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"auth",
    connectionLimit: 10
})
pool.query('select * from pagelogin where id=?',[1],(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})