    const fruits =  ["apple", "orange", "banana", "kiwi"];
    let size = fruits.length;
    console.log(size);

    for(let i = 0; i < size; i++){
        console.log(fruits[i]);
    }

    let lista1 = document.getElementById('lista1');

    lista1.innerHTML = "HOLA ALBERTO";
    console.log("La fruta es:", fruits);
    console.warn("La fruta es:", fruits);
    console.error("La fruta es:", fruits);
    console.info("La fruta es:", fruits);
    console.table(fruits);
    console.debug("La fruta es:", fruits);

    let lista2 = document.getElementById('lista2');
    lista2.innerHTML = fruits.join(" ---- ");

    // Eliminar un elemento del arreglo

    let lista3 = document.getElementById('lista3');
    fruits.pop();
    lista3.innerHTML = "Lista3: " + fruits.join(" **** ");

    // Agregar un elemento al final del arreglo
    let lista4 = document.getElementById('lista4');
    fruits.push("Mango");
    fruits.push("Fresa");
    lista4.innerHTML = "Lista4: " + fruits.join(" ---- ");  

    // Shift elimina el primer elemento del arreglo
    let lista5 = document.getElementById('lista5');
    fruits.shift();
    fruits.shift();
    lista5.innerHTML = "Lista5: " + fruits.join(" === ");

    // Unshift agrega un elemento al inicio del arreglo
    let lista6 = document.getElementById('lista6');
    fruits.unshift("Pera");
    fruits.unshift("Uva");
    lista6.innerHTML = "Lista6: " + fruits.join(" ---- ");

    const nombresMujeres = ["Ana", "Maria", "Sofia"];
    const nombresHombres = ["Juan", "Pedro", "Luis"];

    const listaNombres = nombresHombres.concat(nombresMujeres);
    let lista7 = document.getElementById('lista7');
    lista7.innerHTML = "Lista7: " + listaNombres.join(" ____ ");
