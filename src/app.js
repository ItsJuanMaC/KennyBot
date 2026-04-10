const express = require('express');
const app = express();
const PORT = 3000;
// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());
// Endpoint Hello World
app.get('/hola', (req, res) => {
 res.json({ mensaje: '¡Hola Mundo desde Express!' });
});

app.get('/metros/:num', (req, res) => {
    const num = req.params.num
    const pies = num * 3.28
    res.json({ mensaje:`'¡Hola, ${num} metros son ${pies} pies!` });
});

app.get("/contra/:password", (req, res) => {
    const password = req.params.password;
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        res.json({ mensaje: "La contraseña no es segura" });
    } else {        res.json({ mensaje: "La contraseña es segura" });
    }
});




// Iniciar el servidor
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});