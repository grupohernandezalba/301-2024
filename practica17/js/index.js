    
    let j = 500;
    let nombre = "Mariana";
    for(let j = 10; j <= 20; j++) {
        console.log(j);
        let nombre = "Romina";
        console.log("Nombre dentro del for:", nombre);
    }
    console.log("Valor de j fuera del ciclo:", j);

    console.log("Nombre:", nombre);

    const PI = Math.PI;
    console.log(PI);

    const persona = { nombre : "Juan", edad : 30, sexo : "M", casado : false};

    for(let propiedad in persona) {
        console.log(propiedad, persona[propiedad]);
    }

    let marcas = ["Toyota", "Nissan", "Honda", "Mazda"];
    for(let marca of marcas) {
        console.log(marca);
    }

    j = 1;  
    while(j < 30) {
        console.log(j);
        j++;  
    }
