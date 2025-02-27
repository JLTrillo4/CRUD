const express = require ('express');

const app = express ()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let usuarios = [
    {id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japon' },
    {id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    {id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    {id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    {id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

//console.log (usuarios);

app.get ('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
        id : usuarios.length + 1,
        nombre: req.body.nombre,
        edad: ,
        lugarProcedencia
    }
})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})