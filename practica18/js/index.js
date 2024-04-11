    
    let lista = document.getElementById('lista');
    let texto = "Hola mi nombre es Angel y acabo de cumplir 19 años";
    console.log(texto);

    console.log(`Otra forma de manejar cadenas string`);

    let text = `Cadena multilinea
        brown fox
        jumps over
        the lazy dog`;
    console.log(text);
    let a = 5;
    let b = 10;
    console.log(`El resultado de la suma de ${a} y ${b} es ${a+b}
    Multiplica ${a} por ${b} es ${a*b}
    Divide ${a} entre ${b} es ${a/b}    

    Alt + 96 = apostrafe invertido (backtick)

    `);

    let persona = "Mike";
    let edad = 16;

    function miFuncion(cadenas, personaX, edadExp){
        let resultado = "";
        console.log(cadenas);
        console.log(cadenas[2]);

        //edadExp < 18 ? resultado = "menor de edad" : resultado = "mayor de edad";
        resultado = edadExp < 18 ? "menor de edad" : "mayor de edad";
        return resultado;
    }

    //console.log(miFuncion('Hola','Pepe',18));

    let resultado2 = miFuncion`Hola ${persona} buenos dias tienes ${edad} años`;
    console.log(resultado2);

    let titulo = "Ganadores Oscares";
    let cantantes = ["Billie Elish", "Lady Gaga", "Adele"];
    let cadenaHTML = `<h1>${titulo}</h1>`

    cadenaHTML += `<ul>`;
    for(let cantante of cantantes){
        cadenaHTML += `<li>${cantante}</li>`;
    }
    cadenaHTML += `</ul>`;

    lista.innerHTML = cadenaHTML;


