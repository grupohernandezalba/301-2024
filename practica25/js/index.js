class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
}

let person1 = new Person("Sara");
console.log(person1);

class Animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    
    canta() {
        return `${this.nombre} puede cantar`;
    }
    
    baila() {
        return `${this.nombre} puede bailar`;
    }
}

let bongo = new Animales("Bongo", "Peludo");
console.log(bongo);

console.log(bongo.canta());



class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }
    
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

let clara = new Gatos("Clara", 33, "índigo");

console.log(clara.bigotes());
