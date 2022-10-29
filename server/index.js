/**birinci olarak temlede backenf  kurup temel baglanti yapariz
 * 
const express = require('express')
const app = express()
const Port =3500
app.get('/',(req,res)=>{
  res.send('debe')  
})
app.listen(Port,()=>{
    console.log('baglan1')
})
 * 
 */

const express = require('express')
const app = express()
const cors =require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const Port =3500
app.post('/',async(req,res)=>{

  const {name} = await req.body
  console.log(name)
  
})


app.listen(Port,()=>{
    console.log('baglan1')
})