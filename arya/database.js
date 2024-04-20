const {Pool}=require('pg')

 
const pool = new Pool({
    host: 'localhost',
    database:'training',
  user: 'postgres',
  port :'5432'

})
 
 const call =async ()=>{
const client = await pool.connect()
const res=await client.query('SELECT * FROM employees')
console.log(res)
client.release()
}
call()
module.exports=call