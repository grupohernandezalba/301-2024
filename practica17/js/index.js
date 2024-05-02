    let j = 500;
    let nombre = "Greys";
    for( let j = 10; j<=20; j++){
        console.log(j);
        let nombre = "Denisse";
        console.log("Nombre dentro del ciclo", nombre);
    }

    console.log("El valor de j despues del ciclo es ",j);
    console.log("Nombre fuera del ciclo", nombre);
    const PI = Math.PI;
    console.log(PI);

    const persona = { 
        nombre : "Saul", 
        edad : 27, 
        sexo : "M" , 
        casado : true 
    };
    
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.sexo);
    console.log(persona.casado);

    for(let propiedad in persona){
        console.log(propiedad + ":" + persona[propiedad]);
    }

    let marcas = ["Toyota", "Nissan","Honda","Porsche"];

    let listadeautos = document.getElementById("lista2");
    //lista.innerHTML = "";
    for(let marca of marcas){
        console.log(marca);
        listadeautos.innerHTML += "<li>" + marca + "</li>";
    }

    let peliculas = [
        {
            nombre : "Spiderman into the spiderverse",
            imagen : "https://m.media-amazon.com/images/I/91F2HZa97jL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nombre : "End Game",
            imagen : "https://m.media-amazon.com/images/I/91F2HZa97jL._AC_UF894,1000_QL80_.jpg"
        },
        {
            nombre : "Anatomia de una caida",
            imagen : "https://m.media-amazon.com/images/I/91F2HZa97jL._AC_UF894,1000_QL80_.jpg"
        }
    ];

    let listaPeliculas = 
    document.getElementById("listaPeliculas");

    for(let pelicula of peliculas){
        console.log(pelicula.nombre);
        listaPeliculas.innerHTML += "<div class='col-12 col-md-4 text-center'>" + 
        "<p style='color:red'>" + pelicula.nombre + "</p>" + 
        "<img src='" + pelicula.imagen + 
        "' class='w-75'>" + "</div>";
    }

    j = 1;

    while( j <= 30 )
    {
        console.log(j);
        j++;
    }

    let result = 0;
    let i = 0;

    do {
        i = i + 1;
        result = result + 1;
    } while( i < 5)

    console.log("Result:",result);

    window.open("https://google.com");


