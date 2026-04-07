const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

app.get('hola/',(req,res)=>{
    res.send({mensaje:'Hola mundo'});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto en http://localhost:${PORT}`);
});