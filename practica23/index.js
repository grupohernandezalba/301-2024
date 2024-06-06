const express = require('express')
const app = express()
const port = 81

app.get('/',(req,res)=>{

    // Jalar los productos de una api https://fakestoreapi.com/products/
    // Usar FETCH 4 puntos solo nombre y precio 
    // Asi como esta 2 puntos

    let productos = [
        {
            nombre: "producto1",
            precio: 200
        },
        {
            nombre: "producto2",
            precio: 100
        },
        {
            nombre: "producto3",
            precio: 300
        }
    ];

    let htmlContent = '<table border="1" width="100%">';
    productos.forEach((producto,indice)=>{
        htmlContent += `
        <tr> 
            <td> ${ producto.nombre } </td>
            <td> ${ producto.precio } </td>
        </tr>`;
    });
    htmlContent += '</table>';

    res.send(htmlContent);
});

app.listen(port,()=>{
    console.log(`Escuchando en puerto ${ port }`);
});

